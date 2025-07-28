// Import our rule map "database"
const { ruleMap } = require('../utils/ruleMapStore');

// Helper function to validate email format
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Helper function to validate ISO-8601 timestamp format
const isValidTimestamp = (timestamp) => {
  const re = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
  return re.test(timestamp);
};

const enrollUser = (req, res) => {
  const { email, source, timestamp, apikey } = req.body;

  // --- 1. Validation ---
  if (!email || !source || !timestamp || !apikey) {
    return res.status(400).json({ message: 'Bad Request: One or more required fields are missing.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Bad Request: Invalid email format.' });
  }
  if (!isValidTimestamp(timestamp)) {
    return res.status(400).json({ message: 'Bad Request: Invalid ISO-8601 timestamp format.' });
  }

  // --- 2. Rule Map Lookup ---
  const destinations = ruleMap[source];
  if (!destinations) {
    return res.status(404).json({
      message: `Source '${source}' not found in rule map.`,
      destinations_hit: [],
      status: [],
    });
  }

  // --- 3. Simulate POSTs ---
  console.log(`--- SIMULATING POSTS for source: ${source} ---`);
  const statusArray = [];
  const enrolledOnDate = new Date(timestamp).toISOString().split('T')[0]; // Format to YYYY-MM-DD

  destinations.forEach((destination) => {
    const payload = {
      email: email,
      source: 'ecosystem-sync',
      enrolledOn: enrolledOnDate,
    };
    // This is our "Mock POST" as required by the assignment
    console.log(`SUCCESS: Mock POST to ${destination} with payload:`, payload);
    statusArray.push({ destination: destination, status: '200 OK' });
  });
  console.log('--- SIMULATION COMPLETE ---');


  // --- 4. Return Final Summary Response ---
  return res.status(200).json({
    message: 'Enrollment sync processed successfully.',
    destinations_hit: destinations,
    status: statusArray,
  });
};

module.exports = {
  enrollUser,
};