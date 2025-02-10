const { verify } = require("jsonwebtoken");
const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const { default: mongoose } = require("mongoose");
const { serializeError } = require('serialize-error-cjs')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.createdBy });
  res.status(200).json({ jobs, count: jobs.length });
};
const postJob = async (req, res) => {
  const { company, position } = req.body;
  Job.create({ company, position, createdBy: req.createdBy })
  res.status(StatusCodes.CREATED).json({ success: true })
}
const deleteJob = async (req, res) => {
  const { id } = req.params;

  // if(!id || mongoose.isValidObjectId(id)){
  //     throw new BadRequestError("please provide valid Object Id");
  // }
  const result = Job.deleteOne({ _id: id, createdBy: req.createdBy })
  res.json(result)
}
const updateJob = async (req, res) => {
  const id = req.params;
  const { company, position, status } = req.body;
  if (!company && !position && !status) {
    throw new BadRequestError("please provide proper update values");
  }
  const update = {};
  for (k of req.body) {
    if (req.body[k] != "") {
      update[k] = req.body[k]
    }
  }
  const result = Job.findOneAndUpdate({ _id: id }, { $set: update }, { new: true });
  result = serializeError(result)
  res.status(StatusCodes.OK).json({ success: true, result });
}

module.exports = { getAllJobs, postJob, deleteJob, updateJob };
