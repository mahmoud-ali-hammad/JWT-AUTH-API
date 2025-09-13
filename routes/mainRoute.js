const { login, showDashboard } = require('../controllers/mainControllers');
const authenticationMiddleware = require('../middleware/auth.js');
const express = require('express');
const router = express.Router();
router.route('/dashboard').get(authenticationMiddleware, showDashboard);
router.route('/login').post(login);

module.exports = router;
