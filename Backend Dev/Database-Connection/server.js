//step1: npm init -y              :-  command use to install package.json
//step2: npm i express            :-  command use to install express file
//step3: npm i mongoose           :- command use to install mongoose (it is used to connect mongodb to express.js);
//step6: create server.js  
// node server.js or npm start :- to run server at particular host for npm start add "start": "node server.js" in  script in package.json;
// npm i nodemon : to  install nodemon , it do instant changes in live server when any change made in code means we do
//                 not have to refersh  and add   "dev": "nodemon index.js" in  script in package.json;  now to run the code :- "npm run dev"



//Server Instantiate or importing express , mongoose;
const express = require('express');          
const app = express();
const mongoose = require('mongoose');                         

//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


//activate the server on 3000 port and call the function 
app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});


//Routes means when we go to '/' then we will get response; 
app.get('/', (request,response) => {
    response.send("App is Running");
})

// when we got to this route '/api/cars' then that function will run;
app.post('/api/cars', (request,response) => {              
    const {name, brand} = request.body;        
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

// its like mongoose.connect().then().catch()
function dbConnect() {                                                 
	mongoose
		.connect('mongodb://127.0.0.1:27017/myDB', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`)
			console.log(err.message);
		});
}
dbConnect()