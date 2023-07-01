const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");
require("dotenv").config();


//signup route handler
exports.signup = async (req,res) => {
    try{
        const {name, email, password, role} = req.body;                     //get data
        const existingUser = await User.findOne({email});                   //check if user already exist means it find in User data that any email 
                                                                            // match to this email or not if matched then return that entry;
        if(existingUser){                                                  //if email found
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }

        
        let hashedPassword;                                              //secure password by using bcrypt 
        try{                                                            //we used two parameters one is password which we have to secure  and other is
            hashedPassword = await bcrypt.hash(password, 10);           //salt number (10) it define how strong hashed your password menas 10 round of hashing. 
        }
        catch(err) {
            return res.status(500).json({
                success:false,
                message:'Error in hashing Password',
            });
        }


        //create entry for User and insert all these four thing into database;
        const user = await User.create({name, email, password:hashedPassword, role})
        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
       
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
        });
    }
}



//login route handler
exports.login = async (req,res) => {
    try {

        const {email, password} = req.body;                 //data fetch
         
        if(!email || !password) {                           //validation on email and password
            return res.status(400).json({
                success:false,
                message:'PLease fill all the details carefully',
            });
        }

        let user = await User.findOne({email});             //check for registered user means check email is already present in database or not;
         
        if(!user){                                         //if not a registered user
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }

        const payload = {                                //The payload contains the data being transmitted, such as the user's ID or email address;              
            email:user.email,                            // header typically contains the type of the token (JWT)
            id:user._id,                                 //signature is created by hashing the header and payload using a secret key, which can be used to verify the authenticity of the token
            role:user.role,
        };


        //verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password)){               //here we compare password with user.password(this password we get from databse when we checked that email is present in DB or not)
  
            //password match then we create a token(it is combination of palyload , header , signature)
            let token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:"2h",} );               
                                                                         
            user = user.toObject();                                     // converted user to object;
            user.token = token;                                         //we insert token in user but not password;
            user.password = undefined;

            const options = {                                          //created option for cookie that expire cookie after finite time;
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
             
            //added cookie in response(it contain cookie_name , cookie_data , option)
            res.cookie("babbarCookie", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',
            });
        }
        else {                                                          //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });
    }
}