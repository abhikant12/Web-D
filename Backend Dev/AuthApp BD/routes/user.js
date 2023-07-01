const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");                      //import login, signup from controller;

router.post("/login", login);                                //routing login and signup;
router.post("/signup", signup);
 


//route for middleware;
const {auth, isStudent,isAdmin} = require("../middlewares/auth");            //importing middleware;

//testing protected routes for single middleware
router.get("/test", auth, (req,res) =>{                                      // here auth middleware check that authentication user hai ki nhi;
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

//Protected Route
router.get("/student", auth, isStudent, (req,res) => {                      //we insert two middleware in route "/student" that check authentication and student hai ki nhi;
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );
 
router.get("/admin", auth, isAdmin, (req,res) => {                        //we insert two middleware in route "/admin" that check authentication and Admin hai ki nhi;
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;