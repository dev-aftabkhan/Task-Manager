const TaskList = require('../models/TaskList');
const Task = require('../models/Task');

// Create task list
exports.createTaskList = async (req, res) => {
  try {
    const taskList = await TaskList.create({ name: req.body.name, user: req.user.id });
    res.status(201).json(taskList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all task lists of a user
exports.getTaskLists = async (req, res) => {
  try {
    const lists = await TaskList.find({ user: req.user.id });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update task list name
exports.updateTaskList = async (req, res) => {
  try {
    const list = await TaskList.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { name: req.body.name },
      { new: true }
    );
    if (!list) return res.status(404).json({ error: 'Task list not found' });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete task list and its tasks
exports.deleteTaskList = async (req, res) => {
  try {
    await Task.deleteMany({ taskList: req.params.id });
    await TaskList.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Task list and its tasks deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
