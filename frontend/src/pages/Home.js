import {useState, useEffect} from 'react'

const Home =()=>{
    const [tweets, setTweets] =useState(null)
    const [error, setError]   =useState(null)


    //fetch tweets 
    useEffect(()=>{
        
        const fetchTweets = ()=>{
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
    })
    return(
        <p>Home</p>
    )
}

export default Home