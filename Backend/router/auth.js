const {Router} = require('express');
const User = require('../models/auth')

const router =Router()


//signup user

router.post('/signup', (req,res)=>{
    //get username, email, and passwor from the body
    const {username, email, password} =req.body
})


//login user
router.post('/login', (req,res)=>{
    res.json('login userr')
})

module.exports =router