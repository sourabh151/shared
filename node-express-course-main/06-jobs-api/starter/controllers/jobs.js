const { verify } = require("jsonwebtoken");
const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const { default: mongoose } = require("mongoose");

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.createdBy });
    res.status(200).json({ jobs, count: jobs.length });
};
const postJob = async (req, res) => {
    const {company,position} = req.body;
    const job = Job.create({company,position,createdBy:req.createdBy})
    res.status(StatusCodes.CREATED).json({success:true})
}
const deleteJob = async (req,res)=>{
    const {id} = req.query;
    
    // if(!id || mongoose.isValidObjectId(id)){
    //     throw new BadRequestError("please provide valid Object Id");
    // }
    const result = Job.deleteOne({_id:id,createdBy:req.createdBy})
    res.json(result)
}

module.exports = {getAllJobs,postJob,deleteJob};