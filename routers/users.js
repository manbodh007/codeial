const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');
router.get('/profile',userController.profile);
router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession)
router.get('/',function(req,res){
    return res.end('this is a user page');
})

module.exports = router;