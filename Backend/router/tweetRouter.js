const {Router} =require('express')
const {singleTweet,getTweets,deteleTweet,postTweet}= require('../controllers/tweetController')

const router = Router()

//get all tweets
router.get('/', getTweets)

//single tweet
router.get('/:id',singleTweet )

//add tweet
router.post('/', postTweet)

//delete tweets
router.delete('/:id', deteleTweet)

module.exports =router