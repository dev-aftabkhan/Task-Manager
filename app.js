const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
 

const app = express();
connectDB();

app.use(cors());
app.use(express.json());


 
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
 

module.exports = app;