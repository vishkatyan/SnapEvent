const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
    {
        fname:{
            type : String,
            required:true,
            maxLength:50,
        },
        lname: {
            type : String,
            required:true,
            maxLength:50,
        },
        mail: {
            type : String,
            required:true,
            maxLength:50,
        },
        branch: {
            type : String,
            required:true,
            maxLength:50,
        },
        msg: {
            type : String,
            required:true,
        },
        createdAt :{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("register", registerSchema);