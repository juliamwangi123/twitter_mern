export const useProfile =()=>{

 const profile = async(profilePhoto,
    coverPhoto,
    profileName,
    bio,
    from,
    dob,
    following,
    followers)=>{

        const response = await fetch('/api/profile',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({coverPhoto,
                profileName,
                bio,
                from,
                dob,
                following,
                followers})
        })
        
        const json = await response.json

        if(response.ok){

        }


}
}