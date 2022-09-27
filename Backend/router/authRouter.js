const {Router, json} = require('express');
const User = require('../models/authModel')
const jwt = require('jsonwebtoken')

const router =Router()



//generate tokem 
const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET, {expiresIn: '2d'})
}


//signup user
router.post('/signup', async(req,res)=>{
    //get username, email, and passwor from the body
    const {username, email, password} =req.body

    try{
        const newUser = await User.signup(username, email, password);

        //jwt token generated upon signup
        const token =generateToken(newUser._id)

        //return email and token
        res.status(200).json({ token,newUser})
    }catch(error){
        res.status(400).json({error : error.message})
    }  
})


//login user
router.post('/login', async(req,res)=>{
    const {username , password} =req.body

    try{
        const user = await User.login(username, password)

        //generate jwt token upon login 
        const token = generateToken(user._id)
        res.status(200).json({ token,user})
    }catch(error){
        res.status(400).json({error: error.message})
    }

})

module.exports =router