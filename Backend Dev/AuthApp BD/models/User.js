const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin", "Student", "Visitor"],              //this means user have to take one value out of these three value;
    }
});

module.exports = mongoose.model("user", userSchema);