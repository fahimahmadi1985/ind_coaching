const router = require('express').Router();
const { register, login } = require('../controllers/users.controller');
const User = require('../models/users.model');


router.post('/register', register);


router.post('/login', login);


 
module.exports = router;