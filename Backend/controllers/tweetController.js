const { default: mongoose } = require('mongoose')
const Tweets = require('../models/tweetsModel')

//get tweets
const getTweets =async(req , res)=>{
    try{
        const tweets = await Tweets.find({})
        res.status(200).json(tweets)


    }catch(error){
        console.log({error: error.message})
        res.status(400).json({error:error.message})

    }
}

//get a single tweet 
const singleTweet =async (req,res)=>{
    const {id}=req.params
     
    //use mongoose to check id object validity
    if(!mongoose.isValidObjectId(id)){
        res.status(401).json('Tweet not found')
    }

    //use mongoose to  find the tweet in the db
    const tweet = await Tweets.findById(id)
    if(!tweet){
        res.status(401).json('Tweet not found')
    }

    //return twwt if found
    res.status(200).json(tweet)
    
}
//post tweet 
const postTweet = async(req, res)=>{
    const {body}= req.body
    
    try{
        const newTweet = await Tweets.create({body})
        res.status(200).json({newTweet, message:'tweet succesfully created'})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }


}
//detele tweet
const deteleTweet = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.isValidObjectId(id)){
        res.status(401).json('Tweet not found')
    }

    //find  tweet using id and delete
    const tweet = await Tweets.findByIdAndDelete(id)

    if(!tweet){
        res.status(401).json('Tweet not found')
    }

    res.status(200).json('Succesfully deleted')
}


module.exports= {singleTweet,getTweets,deteleTweet,postTweet}