const {Router, json} = require('express');
const User = require('../models/authModel')

const router =Router()


//signup user

router.post('/signup', async(req,res)=>{
    //get username, email, and passwor from the body
    const {username, email, password} =req.body

    try{

        const newUser = await User.signup(username, email, password);
        res.status(200).json(newUser)
    }catch(error){
        res.status(400).json({error : error.message})
    }


    
})


//login user
router.post('/login', async(req,res)=>{
    const {username , password} =req.body

    try{
        const user = await User.login(username, password)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }

})

module.exports =router