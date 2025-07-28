// Import the 'ruleMap' variable from our temporary database
let { ruleMap } = require('../utils/ruleMapStore');

// A function to get the current map
const getMap = (req, res) => {
  res.status(200).json(ruleMap);
};

// A function to update the map
const updateMap = (req, res) => {
  const newMap = req.body; // The new map comes from the request body

  // A simple check to make sure data was actually sent
  if (!newMap || Object.keys(newMap).length === 0) {
    return res.status(400).json({ message: 'Bad Request: No map data provided.' });
  }

  // Replace the old map with the new one
  ruleMap = newMap;

  res.status(200).json({
    message: 'Rule map updated successfully.',
    newMap: ruleMap,
  });
};

// Export these functions to be used by our routes
module.exports = {
  getMap,
  updateMap,
};