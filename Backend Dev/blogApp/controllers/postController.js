const Post = require("../models/postModel");


exports.createPost = async (req,res) => {
    try{
            const {title, body} = req.body;                        // get title and body from postModel.js;
            const post = new Post({                               // created new post;
                title,body,
            });
            const savedPost = await post.save();               ////save the new post into the database

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};



exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments");
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}


/*
in getAllposts we get all post and in each post we get id of like and comment if we do not populate like and comment like :- await Post.find();
ex :-    {
            "posts": [
                {
                    "_id": "649e80657f8be414b499cbec",
                    "title": "abhikant blog",
                    "body": "dummy post",
                    "likes": [
                        "649e896d9e72ad15b39f5042",
                        "649e897f9e72ad15b39f5046"
                    ],
                    "comments": [
                        "649e89ce9e72ad15b39f504a"
                    ],
                    "__v": 0
                },
                {
                    "_id": "649e80d75f1fa251532c69fc",
                    "title": "rajeev blog",
                    "body": "dummy post",
                    "likes": [],
                    "comments": [],
                    "__v": 0
                }
            ]
        }



and if want to replace id of like and comment with its object then we have to popluate it like :- populate("likes").populate("comments")
ex :-   {
            "posts": [
                {
                    "_id": "649e80657f8be414b499cbec",
                    "title": "abhikant blog",
                    "body": "dummy post",
                    "likes": [
                        {
                            "_id": "649e896d9e72ad15b39f5042",
                            "post": "649e80657f8be414b499cbec",
                            "user": "sumit",
                            "__v": 0
                        },
                        {
                            "_id": "649e897f9e72ad15b39f5046",
                            "post": "649e80657f8be414b499cbec",
                            "user": "nancy",
                            "__v": 0
                        }
                    ],
                    "comments": [
                        {
                            "_id": "649e89ce9e72ad15b39f504a",
                            "post": "649e80657f8be414b499cbec",
                            "user": "nancy",
                            "body": "wah ky hai",
                            "__v": 0
                        }
                    ],
                    "__v": 0
                },
                {
                    "_id": "649e80d75f1fa251532c69fc",
                    "title": "rajeev blog",
                    "body": "dummy post",
                    "likes": [],
                    "comments": [],
                    "__v": 0
                }
            ]
        }

*/