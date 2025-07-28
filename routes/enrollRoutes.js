const express = require('express');
const router = express.Router();

// Import the controller function we just created
const { enrollUser } = require('../controllers/enrollController');

// When a POST request is made to /ecosystem-enroll, use the enrollUser function
router.post('/ecosystem-enroll', enrollUser);

module.exports = router;