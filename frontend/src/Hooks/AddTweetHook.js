import { useState } from "react"

export const useAddTweet = ()=>{
    const [error, setError] =useState(null)
    const [loading , setLoading] =useState(null)

    const addTweet =async(body)=>{
        const response = await fetch('/api/tweets',{
            method:'POST',
            headers: {'Content-Type':'application/json',
                                    'Accept': 'application/json'},
            body:JSON.stringify({body})
        })

        const json = await response.json()
        console.log(json)
        //if respons status is ok
        if(response.ok){
            setLoading(false)
            setError(null)
            //save the jwt toke and username in local storage 
            localStorage.setItem('user', JSON.stringify(json))
        }

        //else if is not ok
        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
    }
    
    return {error, loading, addTweet}
}