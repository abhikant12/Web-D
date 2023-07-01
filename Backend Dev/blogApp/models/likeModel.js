 const mongoose = require("mongoose");           //import mongoose


//route handler
const likeSchema = new mongoose.Schema({                    // kon se post pe like kiya hai and kon like kiya hai;
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",                                        //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
});

module.exports = mongoose.model("Like", likeSchema);               //export



/*
we insert data like this :-
{
    "post" : "post_id" , 
    "user" : "sumit"                       
}

*/