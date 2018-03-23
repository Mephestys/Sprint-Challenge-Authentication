const jwt = require('jsonwebtoken');

const User = require('../models/userModels');
const { mysecret } = require('../../config');

const authenticate = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    if (token) {
        req.decoded = await jwt.verify(token, mysecret);
        next();
    } else {
      res.status(403).json({
        error: 'No token provided, must be set on the Authorization Header'
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  };
};

module.exports = { authenticate };
