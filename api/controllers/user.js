const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(err => res.json(err));
};

module.exports = {
  createUser
};
