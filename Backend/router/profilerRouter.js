const {Router} = require ('express')
const  {getProfile, postProfile} = require('../controllers/profileController')

const router = Router ()



//update your profile
router.post('/:id', postProfile)

//get a single profile 
router.get('/:id', getProfile)




module.exports =router