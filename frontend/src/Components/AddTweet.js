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
        <div>
        <form onSubmit={handlesubmit}>
            <textarea 
            required
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}
            ></textarea>

            <button disabled={loading}>tweet</button>


        </form>
        {error && <div className="error">{error}</div>}
        </div>
    )
}
export default AddTweet