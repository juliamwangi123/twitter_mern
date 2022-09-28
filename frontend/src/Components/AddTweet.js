import { useState } from "react"
import {useAddTweet} from '../Hooks/AddTweetHook'

const AddTweet=()=>{
    const [body , setBody] =useState('')
    const {error, loading, addTweet} = useAddTweet()

    const handlesubmit =async(e)=>{
        e.preventDefault()
        await addTweet(body)
    }
    return(
        // create tweet form
        <div className="tweetBox">
        <form onSubmit={handlesubmit} >
        <div className="tweetbox__input">
             <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
            <textarea 
            required
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}
            placeholder="What's happening?"
            ></textarea>

            <button disabled={loading} className="tweetBox__tweetButton">tweet</button>
            </div>


        </form>
        {error && <div className="error">{error}</div>}
        </div>
    )
}
export default AddTweet