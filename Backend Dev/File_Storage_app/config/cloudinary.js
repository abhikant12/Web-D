const cloudinary = require("cloudinary").v2;

require("dotenv").config();
exports.cloudinaryConnect = () => {
    try{
            cloudinary.config({
                cloud_name:process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
            })
    }
    catch(error) {
        console.log(error);
    }
}




/*

Cloudinary is a cloud-based media management platform that provides a wide range of services related to media, such as image and video upload,
storage, manipulation, optimization, and delivery. It allows developers to easily manage media content on their websites or applications,
without worrying about server-side infrastructure.

To add Cloudinary to an Express.js application, you can follow these steps:
1.Create a Cloudinary account: If you don't have a Cloudinary account yet, you can sign up for a free account at https://cloudinary.com/users/register/free.
  you can get "your account name", "API key", and "API secret" all in dashboard or (setting -> Access Key me) and login by github account;

2.Install the Cloudinary SDK: You can install the Cloudinary SDK for Node.js using npm, the Node.js package manager. Run the following command 
in your terminal :- "npm install cloudinary"

3.Configure Cloudinary: In your Express.js application, you need to configure Cloudinary with your account credentials. You can do this by 
creating a Cloudinary instance with "your account name", "API key", and "API secret":
ex :-
            const cloudinary = require("cloudinary").v2;
            cloudinary.config({
                 cloud_name: "your_cloud_name",
                 api_key: "your_api_key",
                 api_secret: "your_api_secret",
            });
            

5.Upload media to Cloudinary: Once you have configured Cloudinary, you can upload media to it using the "cloudinary.uploader.upload()" method. 
For example, to upload an image file, you can use the following code:

                    const file = req.files.file;
                    cloudinary.uploader.upload (file.tempFilePath, function(error, result){
                    if(error) {
                            console.error(error);
                            res.status (500).send("Error uploading file to Cloudinary");
                       }
                    else{
                            console.log(result);
                            res.send("File uploaded to Cloudinary");
                    }
                    });
                    
This code uses the req.files object to get the uploaded file, and then passes its temporary file path to the cloudinary.uploader.upload()
method. The method uploads the file to Cloudinary and returns a response, which you can handle in the callback function.


6.Use Cloudinary URLs: After you have uploaded media to Cloudinary, you can use its URLs in your application to display or manipulate the media.
 For example, to display an image, you can use the following code: <img src="https://res.cloudinary.com/your_cloud_name/image/upload/c_scale,w_300/sample.jpg" alt="Sample Image">
This code uses the Cloudinary URL for the uploaded image, and adds parameters to it to resize and scale the image.

we have created a folder in media Libarary in cloudinary , named (abhikant_data) and we upload all the data in that folder;


*/