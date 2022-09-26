const TweetDetails = ({tweets})=>{
    return(
        <div className="tweetsDetails">
            {/* cyle throw tweets  */}
            {tweets.map((tweet)=>(
                <div  className="tweet" key={tweet._id}>
                    {tweet.body}
                </div>
            ))}
        </div>  
    )
}
export default TweetDetails