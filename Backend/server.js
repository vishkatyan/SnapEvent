const express = require('express');
const app = express();
const path = require('path');
const CORS = require('cors');

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT;
app.use(CORS());


//build in middleware
// const staticPath= path.join(__dirname,"./../Frontend");
// app.use(express.static(staticPath))

//middleware to parse json request body
app.use(express.json()); //instead of using bodyparser we use express.json here(optimised way to parse the data)

//listen to port
app.listen(PORT, ()=>{
    console.log(`Server Started Successfully at port ${PORT}`);
});

//import the routes for API
const register = require("./routes/register");

//mount the todo API routes
app.use("/api/v1", register);


//default route
app.get('/',(req,res)=>{
    res.send("Hello to Backend!");
})

//connect to db
const dbConnect = require("./config/database");
dbConnect();