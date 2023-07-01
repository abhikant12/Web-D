const jwt = require("jsonwebtoken");                          // middleware :- auth, isStudent,isAdmin
require("dotenv").config();

exports.auth = (req,res, next) => {
    try{                                                             //there three way to extract token from request;
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");      //extract JWT token
        if(!token || token === undefined)){                                        // if token is missing;
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            const payload = jwt.verify(token , process.env.JWT_SECRET);           // to verify token we have to pass token and secret key;
            req.user = payload;                                                   // we store playload/token in req to check futher in next middleware;
        } catch(error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();                                                   // it call next middleware;
    } 
    catch(error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
        });
    }
   
}


exports.isStudent = (req,res,next) => {
    try{
            if(req.user.role !== "Student"){                              //in req we store token in previous middleware so we used that req here;
                return res.status(401).json({
                    success:false,
                    message:'THis is a protected route for students',
                });
            }
            next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User Role is not matching',
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role !== "Admin") {
            return res.status(401).json({
                success:false,
                message:'THis is a protected route for admin',
            });
        }
        next();
}
catch(error) {
    return res.status(500).json({
        success:false,
        message:'User Role is not matching',
    })
}
}


/*
Middleware comes in the middle of the request and response cycle of the node.js execution. It also provides access to many functions like request and
response objects with the Next function of the cycle. or The middleware in node. js is a function that will have all the access for requesting an object, 
responding to an object, and moving to the next  middleware function in the application request-response cycle.

Tasks that can be performed with the middleware functions include:

1) Making quick changes to the request and response objects
2) Calling the next middleware immediately as per the stack
3) Effectively executing any code
4) Automatically terminating the request-response cycle

 

*/