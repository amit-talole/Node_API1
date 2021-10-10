const express= require("express")
const monngoose= require("mongoose")

monngoose.connect("mongodb://localhost:27017/Student_Api",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database connection successfully")
}).catch((err)=>{
    console.log(err)
});
