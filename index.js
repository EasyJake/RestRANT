// Load environment variables from .env file
require('dotenv').config();

// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Import the places controller
const placesController = require('./controllers/places');

// Define the home page route
app.get('/', (req, res) => {
  // Send a response when the home route is accessed
  res.send('Hello World!');
});

// Use the places controller for any requests to /places
app.use('/places', placesController);

// Add a wildcard route for handling 404 errors
// This should be the last route
app.get('*', (req, res) => {
  // Set the status code to 404 and send an HTML response
  res.status(404).send('<h1>404 Page Not Found</h1>');
});

// Start the server on the specified port or default to port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // Log to the console to indicate that the server has started
  console.log(`Server is running on port ${PORT}`);
});
