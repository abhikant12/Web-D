const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);             // exporting todoSchema as name Todo;

// Schema is description of data;
// A database schema defines how data is organized within a relational database; this is inclusive of logical 
// constraints such as, table names, fields, data types, and the relationships between these entities.