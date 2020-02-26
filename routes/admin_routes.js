const express = require('express');
const admin = express.Router();
const admin_controller = require('../controllers/admin_controller');

admin.get('/admin', admin_controller.admin);

module.exports = admin;