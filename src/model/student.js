const mongoose= require("mongoose");
const validator= require ("validator");

const StudentSchema= new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:[true,"Email id allrady present in database"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    Phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

//create new collection using model

const Student = new mongoose.model('Student',StudentSchema);

module.exports= Student;