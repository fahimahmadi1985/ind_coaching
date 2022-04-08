const router = require('express').Router();
const User = require('../models/users.model');


router.post('/register', async (req, res, next) => {

    try {
        //write your code here 
        let result = await User.create(req.body);
        res.status(200).send({ result })
    } catch (err) {
        next(err)
    }
});


router.post('/login', (req, res, next) => { 
    
 })


 
module.exports = router;