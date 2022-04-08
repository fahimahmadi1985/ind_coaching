const mongoose = require("mongoose");

//schema => to define some restriction over data
const userSchema = new mongoose.Schema({
  fullname: { type: String, minlength: 3 },
  username: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true,
    unique: true,
    },
    email: { type: 'String', unique: true },  
    password: {type: 'String'}
});


// model => to be able to work with data
module.exports = mongoose.model('User', userSchema);