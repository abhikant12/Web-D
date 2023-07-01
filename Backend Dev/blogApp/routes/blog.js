const express = require("express");
const router = express.Router();


//Import Controller
const {likePost, unlikePost } = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");



//Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;


/*

URL :-  http://localhost:4000/api/v1/dummyroute
URL :-  http://localhost:4000/api/v1/comments/create
URL :-  http://localhost:4000/api/v1/posts/create
URL :-  http://localhost:4000/api/v1/posts

data of post create :-     {
                                "title":"abhikant blog",
                                "body":"dummy post"
                            }



when we send this data the post created like this :-   {
                                                            "post": {
                                                                "title": "abhikant blog",
                                                                "body": "dummy post",
                                                                "likes": [],
                                                                "comments": [],
                                                                "_id": "649e80657f8be414b499cbec",
                                                                "__v": 0
                                                            }
                                                        }







*/