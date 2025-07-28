const express = require('express');
const router = express.Router();

// Import the controller functions
const { getMap, updateMap } = require('../controllers/mapController');

// Import our new authentication middleware
const { checkApiKey } = require('../middleware/authMiddleware');

// This GET route is public and does NOT have the middleware
router.get('/enrollment-map', getMap);

// These routes are now protected. The 'checkApiKey' function will run before 'updateMap'.
router.post('/enrollment-map', checkApiKey, updateMap);
router.patch('/enrollment-map', checkApiKey, updateMap);

// Export this router so our main app can use it
module.exports = router;