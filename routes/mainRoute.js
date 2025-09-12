const { login, showDashboard } = require('../controllers/mainControllers');
const express = require('express');
const router = express.Router();
router.route('/login').post(login);
router.route('/dashboard').get(showDashboard);

module.exports = router;
