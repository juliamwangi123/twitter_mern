import { useState } from "react"

export  const useSignUpHook = ()=>{
    const [error, setError] =useState(null)
    const [loading , setLoading] =useState(null)


    //signup the user
    const signup = async(username, email, password)=>{
        const response = await fetch('/api/user/signup', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username, email, password})
        })

        if(response.ok){
            setLoading(false)
            setError(null)
        }

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }

    }

    return{error, loading, signup}
}