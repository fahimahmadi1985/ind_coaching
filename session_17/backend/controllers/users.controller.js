const User = require('../models/users.model');

async function register(req, res, next) {
  try {
    //write your code here
    let result = await User.create(req.body);
    res.status(200).send({ result });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    //find user
    let user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      let error = new Error("username or password is wrong.");
      error.status = 423;
      throw error;
      return;
    }

    res.status(200).send({ msg: "success" });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };
