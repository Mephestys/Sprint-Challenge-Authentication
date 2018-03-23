const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username.toLowerCase() });
    if (user === null) {
      res.status(422).json({ error: "No user with that username in our DB" });
      return;
    }
    const userIsValidated = await user.checkPassword(password);
    if (userIsValidated) {
      const payload = { username: user.username };
      const token = jwt.sign(payload, mysecret);
      res.json({ token });
    } else {
      res.status(422).json({ error: "Invalid Password!" });
    }
  } catch (err) {
    res.status(403).json({ error: "Invalid Username/Password" });
  }
};

module.exports = { login };
