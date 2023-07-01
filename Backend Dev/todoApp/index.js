const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);                        //all todoRoutes goes on this path :- "/api/v1"

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})


/*

how to define url -> running host is 4000 (see PORT = 4000 in .env file) and mount the todo at "/api/v1" and define
the route of createTodo is "/createTodo" :- router.post("/createTodo", createTodo);
So url :- http://localhost:4000/api/v1/createTodo

Post -> 
http://localhost:4000/api/v1/createTodo  , post -> body -> row , json  then paste data and send

Get ->
http://localhost:4000/api/v1/getTodos , get -> body -> none  then get all the data;
http://localhost:4000/api/v1/getTodos/id , get -> body -> none  then get all the data; and first copy id from data and paste in URL;

PUT ->
http://localhost:4000/api/v1//updateTodo/id , PUT -> body -> row , json then update the data;

DELETE ->
http://localhost:4000/api/v1/deleteTodo/849485958598    , 849485958598   is id of data which want to delete;  , DELETE -> body -> none now item delted;


to get query , how to delete or update or getbyid , createtodo , search in "https://mongoosejs.com/docs/queries.html"
*/