import { useState } from "react"
const { dispatch } = useAuthContext()

export const useLoginHook = ()=>{
    const [error, setError] =useState(null)
    const [loading , setLoading] =useState(null)


    //login user using fetch api
    const login = async(username, password)=>{
        const response = await fetch('/api/user/login', {
            method: "POST",
            headers: {"Content-Type" :"application/json"},
            body:JSON.stringify({username, password})
        })

        //convert response to json
        const json = await response.json()

         //if respons status is ok
         if(response.ok){
            setLoading(false)
            setError(null)

            //change usercontecxt state to login
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
    return {login, error, loading}
}