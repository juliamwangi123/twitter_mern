import { useState } from "react"

const AddTweet=()=>{
    const [body , setBody] =useState('')
    return(
        // create tweet form
        <form>
            <textarea 
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>

            <button>tweet</button>

        </form>
    )
}
export default AddTweet