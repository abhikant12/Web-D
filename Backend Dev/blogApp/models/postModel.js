 const mongoose = require("mongoose");                   //import mongoose


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{                                          // we have created array([]) to store  like and comment
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});


 
module.exports = mongoose.model("Post", postSchema);            //export postSchema as name Post;  




/*
data of post create :-     {
                                "title":"abhikant blog",
                                "body":"dummy post"
                            }
*/