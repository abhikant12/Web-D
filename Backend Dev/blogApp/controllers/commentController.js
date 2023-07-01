const Post = require("../models/postModel");                      //import model
const Comment = require("../models/commentModel");

//business logic 
exports.createComment = async (req, res) => {
    try{
         
        const {post, user, body} = req.body;             //fetch data from req body 
        const comment = new Comment({                    //create a comment object
            post,user,body
        });

        const savedComment = await comment.save();          //save the new comment into the database



        //find the post by ID, add the new commnet to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} } , {new: true} )
                            .populate("comments")                   //populate the comments array with comment documents
                            .exec();

                // when we saved Comment in database then a id is created for that comment which is access by "savedComment._id"
                //Now we push that comment in comment array that we created in postModel.js
                //So we search post(jisme abhi comment kiye hai ) in Post(collection of all post) and update {$push: {comments: savedComment._id}
                // {new: true} :-> return updatedPost if updation occur otherwise old post;
                //populate is used to replace id by comment means if we exec post then we see only id in comment array but if we popluate then we 
                // see whole comment object;


        res.json({
            post: updatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
};