const express = require('express');
const { createTaskList, getTaskLists, updateTaskList, deleteTaskList } = require('../controllers/taskListController');
const { protect } = require('../middleware/authMiddleware');        
const router = express.Router();
// Define routes for task lists     
router.route('/')
  .post(protect, createTaskList) // Create a new task list
  .get(protect, getTaskLists);    // Get all task lists for the authenticated user
router.route('/:id')
  .put(protect, updateTaskList)    // Update a specific task list by ID
  .delete(protect, deleteTaskList); // Delete a specific task list by ID  
module.exports = router; // Export the router to be used in the main app file  