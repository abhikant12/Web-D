const File = require("../models/File");
const cloudinary = require("cloudinary").v2;


//localfileupload -> handler function
exports.localFileUpload = async (req, res) => {
    try {

        const file = req.files.file;                                                            //fetch file from request
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;          //create path where file need to be stored on server , __dirname is the name of current directory;

        file.mv(path , (err) => {                                                   //add path to the move fucntion so move function move file to the path;
            console.log(err);
        });

        res.json({                                                                 //create a successful response
            success:true,
            message:'Local File Uploaded Successfully',
        });
    }
    catch(error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}

/*
to upload the file  url :- http://localhost:4000/api/v1/upload/localFileUpload  then POST -> body -> form-data then enter key = file and 
in value select any file which want to upload then press send and now your file is uploaded to server means your file is now visible in 
controllers/file folders.

`.${file.name.split('.')[1]}`  :- in line 9 we write because we want to insert .jpg in file name so we jo in file object name attribute contain file name 
 like "989898989.jpg" so we split on basis of dot and then 2nd index contain file extension we join them;
*/

 

 

 
async function uploadFileToCloudinary(file, folder , quality) {
    const options = {folder};
    options.resource_type = "auto";                                                // it auto detect the file type;
    if(quality) options.quality = quality;                                         // we have passed the quality in function then it equate that equality to pic quality it is used to reduce the size of image;
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


//image upload ka hadnler
exports.imageUpload = async (req, res) => {
    try{
        const { name, tags, email} = req.body;                        //data fetch
        const file = req.files.imageFile;                            // jo bhi ham upload krenge postman me then usme name,tag,email and imageFile rahega imageFile contain image and name , tag,email contain data about image;
        
        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();       //extracting filetype from file names;

        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        const response = await uploadFileToCloudinary(file, "abhikant_data");

        //db me entry save krni h
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,                            // in response , secure_url contain url of uploaded image so we insert URL in DB;
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        });

    }
}


//video upload ka handler
exports.videoUpload = async (req,res) => {
    try{
       
        const { name, tags, email} = req.body;                             //data fetch
        const file = req.files.videoFile;                                 // jo bhi ham upload krenge postman me then usme name,tag,email and videoFile rahega videoFile contain video and name , tag,email contain data about video;

         //Validation
         const supportedTypes = ["mp4", "mov"];
         const fileType = file.name.split('.')[1].toLowerCase();
         
         if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        const response = await uploadFileToCloudinary(file, "abhikant_data");
    
        //db me entry save krni h
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,                          // in response , secure_url contain url of uploaded VIDEO so we insert URL in DB;
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Video Successfully Uploaded',
        })

    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}


//imageSizeReducer
exports.imageSizeReducer = async (req,res) => {
    try{
        
        const { name, tags, email} = req.body;                      //data fetch
        const file = req.files.imageFile;

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        const response = await uploadFileToCloudinary(file, "abhikant_data", 90);

        //db me entry save krni h
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}