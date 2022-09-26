 import { useState } from "react"
 import {useLoginHook} from '../Hooks/LoginHook'
 import { useNavigate } from "react-router-dom"
const Login =()=>{
    const [username, setUsername] =useState('')
    const [password, setPassword] = useState('')
    const {error, loading, login} = useLoginHook()
    const navigate =useNavigate()


    //invoked on submit 
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await login(username, password)

        //redirect to home once you've logged in
        navigate('/')
    }
    return (
        // login form
        <div className="loginform">
            <form onSubmit={handleSubmit}>
                 {/* username */}
                 <label>Username</label>
                <input 
                type='text'
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                />

                {/* passoword */}
                <label>Password</label>
                <input 
                type='email'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                {/* sign up button */}

                <button disabled={loading}>Login</button>

            </form>
            {error && <div className="error">{error}</div>}
        </div>
        
    )
}

export default Login