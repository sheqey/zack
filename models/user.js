const mongoose = require("mongoose");

var users = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
    });

    const user = mongoose.model('users',users);
    module.exports = user;