const {Router, json} = require('express');
const User = require('../models/auth')

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
router.post('/login', (req,res)=>{
    res.json('login userr')
})

module.exports =router