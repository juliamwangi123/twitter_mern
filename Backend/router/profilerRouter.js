const {Router} = require ('express')

const router = Router ()

//get profile 
router.get('/profile', )


//get a single profile 
router.get('/profile/:id')



//post your profile
router.post('/profile')

//update your profile
router.patch('/profile/:id')


module.exports =router