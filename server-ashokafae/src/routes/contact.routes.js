const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Route to handle contact form submissions
router.post('/send', contactController.sendEmail);

module.exports = router;
