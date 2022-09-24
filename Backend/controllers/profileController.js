// const Profile = require('../models/profileModel');
const mongoose =require('mongoose');
const User = require('../models/authModel')





//post to a profileJ
const postProfile = async(req,res)=>{
    const {id} =req.params
        const {
            profilePhoto,
            coverPhoto,
            profileName,
            bio,
            from,
            dob,
            following,
            followers
    
        }=req.body

    
            try{

            const profile = await User.findByIdAndUpdate({_id:id},{...req.body})

            res.status(200).json(profile)

            }catch(error){
                res.status(401).json({error: error.message})
            }
   
        }
 


    //get a single profile
    const getProfile=async (req, res)=>{
        const {id} = req.params

        //use mongoose to check the validity of the id object
        if(!mongoose.isValidObjectId(id)){

            return res.status(404).json({error : 'User not Found'})
    
        }

        try{
            const profile = await User.findById(id)

            //if the user is not found throw an error
            if(!profile){
                res.status(404).json({error: "User not Found"})
            }

            //else reurn user profile
            res.status(200).json(profile)
            
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

   












module.exports =    {
                     postProfile,
                     getProfile
                    // updateProfile
                }