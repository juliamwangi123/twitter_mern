import { useState } from "react"
import {useSignUpHook} from '../Hooks/SignupHook'
import { useNavigate } from "react-router-dom"

const SignUp =()=>{
    const [username, setUsername] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, loading, signup} =useSignUpHook()
    const navigate =useNavigate()

    //function invoked when sign up button is  clicked
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(username, email, password)

        //navigate to home page once user sign up
        navigate('/')
    }

    return(
        <div className="signupform">
            {/* signup form */}
            <form onSubmit={handleSubmit}>
                {/* username */}
                <label>Username</label>
                <input 
                type='text'
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                />

                {/* email */}
                <label>Email</label>
                <input 
                type='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />

                {/* passoword */}
                <label>Password</label>
                <input 
                type='email'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                {/* sign up button */}

                <button disabled={loading}>Sign up</button>

            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default SignUp