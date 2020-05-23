const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');
router.get('/profile',userController.profile);
router.get('/',function(req,res){
    return res.end('this is a user page');
})

module.exports = router;