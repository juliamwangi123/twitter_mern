const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')


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
    if(!username||!email|| !password){
        throw Error('Fields connot be empyty')
    }

    //check if email is Strong use validator package
     if(!validator.isEmail(email)){
        throw Error('Put a valid email')
     }


     //check strength of the password
     if (!validator.isStrongPassword(password)){
        throw Error('Password should be stron')
     }


     //check if email and username is already reqgisered
     const userExist = await this.findOne({  "$or" :[{email}, {username}]})


     //throw an error if already registerd
     if(userExist){
        throw Error('Username or email already registered')
     }


     //if not create the user 

        //a. hash the password first
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        //b. create the user 
         const user = await this.create({username, email, password:hash});

         return user

}

//login static user

userSchema.statics.login = async function (username, password){
    // check if both fields are filled 
     if(!username || !password){
        throw Error ('Field should not be empty')
     }

     //check if the user exsist
     const user = await this.findOne({username})


     //if user does not exist throw an error
     if(!user){
        throw Error('user not found')
     }


     //if the user exists match the passoword and the hasshed password
     const  matchPassword = await bcrypt.compare(password, user.password)


     if(!matchPassword){
        throw Error ('wrong password')
     }


     return user
}




module.exports =mongoose.model('User', userSchema)