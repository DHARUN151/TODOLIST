const mongoose = require("mongoose");

async function connectDB(){
    const connection = await mongoose.connect("")
    console.log("Database connected successfully");
} 


module.exports = connectDB;
