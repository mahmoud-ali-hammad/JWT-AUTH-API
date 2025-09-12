const asyncWrapper = require('express-async-handler');

const login = asyncWrapper(async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.json('login pages');
});

const showDashboard = asyncWrapper(async (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ status: 'success', mess: `hello mahmoud you are ${luckNumber}` });
});

module.exports = {
  login,
  showDashboard,
};
