import {useState, useEffect} from 'react'


//components
import TweetDetails from '../Components/TweetDetails'

const Home =()=>{
    const [tweets, setTweets] =useState(null)
    const [error, setError]   =useState(null)


    //fetch tweets 
    useEffect(()=>{
        
        const fetchTweets = async()=>{
            //use fetch api to get data
            const response = await fetch('/api/tweets')
            const json = await response.json()

            //change tweets state if the response  status is ok
            if(response.ok){
                setTweets(json)
            }

            //if response is not ok 
            if(!response.ok){
                setError(json)
            }
        

        }
        fetchTweets()
    },[])
    return(
        <div className='home'>
            {/* pass tweets to the tweet components */}
            {tweets && 
                <div className='twees'>
                    <TweetDetails tweets={tweets}/>
                </div>}

                {/* show error if any */}
            {error && <div className='error'>{error}</div>} 

        </div>
    )
}

export default Home