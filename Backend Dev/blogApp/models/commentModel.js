  const mongoose = require("mongoose");                   //import mongoose


//route handler
const commentSchema = new mongoose.Schema({             //comment on which post , which user is commented and  what is comment (body)
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",                                //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

 
module.exports = mongoose.model("Comment", commentSchema);                //export



/*
we insert data like this :-
{
    "post" : "post_id" , 
    "user" : "sumit" ,
    "body" : "what is your name"                         
}

*/