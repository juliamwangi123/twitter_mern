require ('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const authRouter= require('./router/auth')

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