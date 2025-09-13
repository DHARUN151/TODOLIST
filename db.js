const mongoose = require("mongoose");

async function connectDB(){
    const connection = await mongoose.connect("mongodb+srv://dharuns2006:OaMYql94va91H8nB@cluster0.jdjg6qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected successfully");
} 

module.exports = connectDB;