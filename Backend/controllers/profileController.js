const Profile = require('../models/profileModel');
const mongoose =require('mongoose')


//get all profiles
const getProfile = async(req, res)=>{

    try{
        const profiles = await Profile.find({})
        res.status(200).json(profiles)


    }catch(error){
        res.status(400).json({error: error.message})

    }

}


//post to a profileJ
const postProfile = async(req,res)=>{
    const {
        name,
        profilePhoto,
        coverPhoto,
        bio,
        from,
        dob,
        following,
        followers

    }=req.body

    try{
        const newProfile = await Profile.create( {
                                            name,
                                            profilePhoto,
                                            coverPhoto,
                                            bio,
                                            from,
                                            dob,
                                            following,
                                            followers
                                    
                                        })

        res.status(200).json(newProfile)
    }catch(error){
        res.status(400).json({error: error.message})
    } 
}



//get as single profile 
const singleProfile =async (req, res)=>{
    const {id} =req.params

    //use monngese to verify the id objects
    if(!mongoose.isValidObjectId(id)){
        res.status(400).json({error: 'Not Found'})
    }


    const profile = await Profile.findById(id)

    //if not found throw an error
    if(!profile){
        res.status(400).json({error: 'Not Found'})
    }

    res.status(200).json(profile)
}










module.exports = {getProfile, postProfile}