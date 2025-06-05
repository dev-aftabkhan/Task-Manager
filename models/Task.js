const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  isDone: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taskList: { type: mongoose.Schema.Types.ObjectId, ref: 'TaskList' }
}, { timestamps: true });


module.exports = mongoose.model('Task', taskSchema);