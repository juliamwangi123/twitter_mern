export const useProfile =()=>{

 const profile = async(profilePhoto,
    coverPhoto,
    profileName,
    bio,
    from,
    dob,
    )=>{

        const response = await fetch('/api/profile',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({coverPhoto,
                profileName,
                bio,
                from,
                dob,
            })
        })
        
        const json = await response.json

        


}

return {profile}
}