const checkApiKey = (req, res, next) => {
  // Look for the API key in a header named 'x-api-key'
  const apiKey = req.header('x-api-key');

  // Check if the API key is missing
  if (!apiKey) {
    return res.status(401).json({ message: 'Unauthorized: API key is missing.' });
  }

  // Check if the API key is invalid
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API key.' });
  }

  // If the key is valid, call next() to pass the request to the controller
  next();
};

module.exports = { checkApiKey };