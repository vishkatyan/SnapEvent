// Ensure connection b/w application and db
const mongoose = require('mongoose');
require("dotenv").config();

//function to connect server with db
const dbConnect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/VISH",{
       
    })
    .then(()=>{
        console.log("Connection Successful with DataBase!")
    }).catch((err)=>{
        console.log("Error Occured")
        console.log(err.message);
        process.exit(1);
    })
}
module.exports = dbConnect;
