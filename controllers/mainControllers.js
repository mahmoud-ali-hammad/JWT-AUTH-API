const jwt = require('jsonwebtoken');
require('dotenv').config();
const CustomAPIError = require('../errors/customError');
const asyncWrapper = require('express-async-handler');

// Login controller
const login = asyncWrapper(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide the required data', 400);
  }

  // Normally you’d check user credentials in DB here
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({
    status: 'success',
    message: 'Login successful',
    token,
  });
});

// Dashboard controller
const showDashboard = asyncWrapper(async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
      status: 'success',
      message: `Hello ${decoded.username}, your lucky number is ${luckNumber}`,
    });
  } catch (err) {
    throw new CustomAPIError('Not authorized user', 401);
  }
});

module.exports = {
  login,
  showDashboard,
};
