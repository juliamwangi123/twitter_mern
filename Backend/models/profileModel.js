const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    name:{
        type:String
    },
    profilePhoto :{
        type:String,
        default: ''
    },
    coverPhoto:{
        type:String,
        default: ''

    },
    bio :{
        type:String
    },
    from :{
        type:String
    },
    dob:{
        type:String
    },
    following:{
        type:Array,
        default:[]
    },
    followers:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('Profile', profileSchema)