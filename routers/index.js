const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
const userController = require('./users');
router.get('/',homeController.home);
router.use('/users',userController);

module.exports = router;