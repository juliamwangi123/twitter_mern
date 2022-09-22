const {Router} = require('express');

const router =Router()


//signup user

router.post('/signup', (req,res)=>{
    res.json(' signup user')
})


//login user
router.post('/login', (req,res)=>{
    res.json('login userr')
})

module.exports =router