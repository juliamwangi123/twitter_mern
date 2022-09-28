import { useState } from "react"

const ProfileEdit =()=>{
    const [coverPhoto, setCoverphoto] =useState('')
    const [profileName, setprofileName] =useState('')
    const [bio , setBio] =useState('')
    const [dob, setDob] =useState('')
    const [from , setFrom] =useState('')

    return(
        <form >
                {/* username */}
                <label>coverPhoto</label>
                <input 
                type='text'
                value={coverPhoto}
                onChange={(e)=>{setCoverphoto(e.target.value)}}
                />
                 {/* username */}
                 <label>profileName</label>
                <input 
                type='text'
                value={profileName}
                onChange={(e)=>{setprofileName(e.target.value)}}
                />
                 {/* username */}
                 <label>Bio</label>
                <textarea 
                type='text'
                value={bio}
                onChange={(e)=>{setBio(e.target.value)}}
                />
                 {/* username */}
                 <label>from</label>
                <input 
                type='text'
                value={from}
                onChange={(e)=>{setFrom(e.target.value)}}
                />
                 {/* username */}
                 <label>DOB</label>
                <input 
                type='text'
                value={dob}
                onChange={(e)=>{setDob(e.target.value)}}
                />

                <button>Set</button>
        </form>
    )
}

export default ProfileEdit