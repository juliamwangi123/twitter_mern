const TweetDetails = ({tweets})=>{
    return(
        <div className="tweetsDetails">
            {/* cyle throw tweets  */}
            {tweets.map((tweet)=>(
                <div  className="tweet" key={tweet._id}>
                    <p> {tweet.body}</p>
                </div>
            ))}
        </div>  
    )
}
export default TweetDetails