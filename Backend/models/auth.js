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

//static method signing the user
userSchema.statics.signup =async function(username, email, password){
   
    //throw an error if the fields are empty upon sign 
    if(username||email|| password){
        throw Error('Fields connot be empyty')
    }
}






module.exports =mongoose.model('User', userSchema)