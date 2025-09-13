const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    }
})
module.exports = mongoose.model("Todo", todoSchema);