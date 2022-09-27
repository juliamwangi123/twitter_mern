import { useState } from "react"
const { dispatch } = useAuthContext()

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

        //convert response to json 
        const json = await response.json()
        //if respons status is ok
        if(response.ok){
            setLoading(false)
            setError(null)

            dispatch({type: 'LOGIN', payload: json})

            //save the jwt toke and username in local storage 
            localStorage.setItem('user', JSON.stringify(json))
        }

        //else if is not ok
        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }

    }

    return{error, loading, signup}
}