const mongoose = require('mongoose')


//tweet schema

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        max:300,
        required:true
    }
},{timestamps:true})


module.exports =mongoose.model('tweets', tweetSchema)