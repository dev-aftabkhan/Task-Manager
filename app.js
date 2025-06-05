const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const tasklist = require('./routes/tasklist'); // Assuming this is the correct path for task list routes    


const app = express();
connectDB();

app.use(cors());
app.use(express.json());


 
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/tasklists', tasklist); // Use the task list routes

module.exports = app;