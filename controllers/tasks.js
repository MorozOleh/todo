const Task = require('../models/Task');

//! get all tasks
const getAllTasks = async (req, res) => {
  res.send('Task Manager App');
};

//! create a task
const createTask = async (req, res) => {
  const { body } = req;
  try {
    const task = await Task.create(body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//! get a task
const getTask = (req, res) => {
  const { id } = req.params;
  res.send(id);
};

//! update a task
const updateTask = (req, res) => {
  const { body } = req;
  console.log(body);
  res.json({ body, message: 'updated' });
};

//! delete a task
const deleteTask = (req, res) => {
  res.send('deleteTask');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
