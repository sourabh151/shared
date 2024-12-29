const Task = require("../models/task");
const mongoose = require("mongoose");
const sanitize = require("../utility/sanitize");
const asyncWrapper = require("../middleware/asyncWrapper");
const customAPIError = require("../errors/customAPIError");

mongoose.set("debug", true);
const getTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const e = new customAPIError(
      { success: false, msg: `Invalid id: ${id}` },
      404
    );
    throw e;
  }
  const task = await Task.findById(id);
  if (!task) {
    return res
      .status(404)
      .json({ success: false, msg: `No task with id: ${id}` });
  }
  res.status(200).json({ success: true, data: task });
};
const getAllTasks = (req, res) => {
  Task.find({}).then((tasks) => {
    res.status(200).json({ tasks });
  });
};
const createTask = async (req, res) => {
  console.log(req.body);

  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ success: false, msg: "No data provided" });
  }
  let { name, completed } = req.body;
  completed === "true" ? (completed = true) : (completed = false);
  // if (!name || typeof completed !== "boolean") {
  //   return res
  //     .status(400)
  //     .json({ success: false, msg: "Please provide name and completed" });
  // }
  name = sanitize(name);
  const task = new Task({ name, completed });
  await task.save();
  res.json({ success: true, data: task });
};
const deleteTask = async (req, res) => {
  if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res
      .status(404)
      .json({ success: false, msg: `Invalid id: ${req.params.id}` });
  }
  let result = await Task.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: result });
};
const updateTask = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `${id} not a valid id` });
  }
  let { name, completed } = req.body;
  name = sanitize(name);
  if (!name) {
    return res
      .status(404)
      .json({ success: false, message: `task name not provided` });
  }
  completed = completed == "true" || completed == true ? true : false;
  const result = await Task.findOneAndUpdate(
    { _id: id },
    { name: name, completed: completed },
    { new: true }
  );
  if (!result) {
    return res
      .status(500)
      .json({ success: false, message: `mongoose update query failed` });
  }
  return res.status(200).json({ success: true, data: result });
};
const asyncGetTask = asyncWrapper(getTask);
const asyncGetAllTasks = asyncWrapper(getAllTasks);
const asyncCreateTask = asyncWrapper(createTask);
const asyncDeleteTask = asyncWrapper(deleteTask);
const asyncUpdateTask = asyncWrapper(updateTask);

module.exports = {
  asyncGetTask,
  asyncGetAllTasks,
  asyncCreateTask,
  asyncDeleteTask,
  asyncUpdateTask,
};
