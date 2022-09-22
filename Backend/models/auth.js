const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        required:true,
        unique:true,
        type:String,
        min:3,
        max:20
    },
    email: {
        required:true,
        unique:true,
        type:String,

    },
    password:{
        required:true,
        type:String,

    }
})



module.exports =mongoose.model('User', userSchema)