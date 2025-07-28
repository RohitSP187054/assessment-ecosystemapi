require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

// Import Routes
const mapRoutes = require('./routes/mapRoutes');
const enrollRoutes = require('./routes/enrollRoutes'); // <-- ADD THIS

// Middleware to parse JSON
app.use(express.json());

// Use Routes
app.use('/api', mapRoutes);
app.use('/api', enrollRoutes); // <-- ADD THIS

// Test Route
app.get('/', (req, res) => {
  res.send('The Ecosystem API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});