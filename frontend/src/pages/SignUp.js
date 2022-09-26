import { useState } from "react"

const SignUp =()=>{
    const [username, setUsername] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="signup">
            {/* signup form */}
            <form>
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

                <button>Sign up</button>

            </form>
        </div>
    )
}

export default SignUp