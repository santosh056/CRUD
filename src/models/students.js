const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type : String,
        required : true,
        unique : [true,"Email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone : {
        type: Number,
        required: true,
        unique : [true,"Phone number already exist"]

    },
    address :{
        type : String,
        required:true
    }
}); 

//We will create a new collection
const Student = new mongoose.model("Student",studentSchema);
module.exports = Student;