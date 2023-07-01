const Post = require("../models/postModel");           //import models
const Like = require("../models/likeModel");


//like a post
exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection based on like just same as comment;
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true})
        .populate("likes").exec();

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}


//Unlike a post
exports.unlikePost = async (req,res) => {

    try{
        const{post, like} = req.body;                     // fetch post id and like id;      
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});      // it delete in Like array in which post_id and like id matched;

        //udpate the post collection by pulling deletedlike
        const udpatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id} }, {new: true});
                                                                                      
        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}
  