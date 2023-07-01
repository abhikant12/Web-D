const express = require("express");                        //app create
const app = express();

require("dotenv").config();                                //PORt find krna h 
const PORT = process.env.PORT || 3000;

  
app.use(express.json());                                   //middleware add krne h 
const fileupload = require("express-fileupload");          // fileupload middleware is used to upload the file;
app.use(fileupload({                                       // fileupload upload media on serve and cloudinary upload on media server;
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const db = require("./config/database");                    //db se connect krnah 
db.connect();

const cloudinary = require("./config/cloudinary");           //cloud se connect krna h 
cloudinary.cloudinaryConnect();

const Upload = require("./routes/FileUpload");               //api route mount krna h 
app.use('/api/v1/upload', Upload);

app.listen(PORT, () => {                                     //activate server
    console.log(`App is running at ${PORT}`);
})