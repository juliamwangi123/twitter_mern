require ('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const authRouter= require('./router/authRouter')
const profileRouter =require('./router/profilerRouter')
const tweetRouter =require('./router/tweetRouter')
//inialize express
const app =express();




//middleware bodyparser
app.use(express.json())

//connect to database
mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT) || 5000
    console.log("connected")
}).catch(error=>{
    console.log(error)
})


//routes
app.use('/api/user/', authRouter)
app.use('/api/profile', profileRouter)
app.use('/api/tweets', tweetRouter)