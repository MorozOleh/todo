const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

//! get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks, amount: tasks.length });
});

//! create a task
const createTask = asyncWrapper(async (req, res) => {
  const { body } = req;

  const task = await Task.create(body);
  res.status(201).json({ task });
});

//! get a task
const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    return next(createCustomError(`task with ${id} id is not found`, 404));
  }
  res.status(200).json({ task });
});

//! delete a task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return next(createCustomError(`task with ${id} id is not found`, 404));
  }

  res.status(200).json({ data: task, message: 'success' });
});

//! update a task
const updateTask = asyncWrapper(async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`task with ${id} id is not found`, 404));
  }

  res.json({ task, message: 'updated' });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
