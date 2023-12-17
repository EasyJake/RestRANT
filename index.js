// Import required modules
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Support for _method (PUT, DELETE) in forms
const mongoose = require('mongoose'); // MongoDB object modeling tool
const Place = require('./models/places'); // Model for the "Place" collection

// Load environment variables
require('dotenv').config();
console.log(process.env.MONGO_URI); // This should print your MongoDB URI

// Initialize Express application
const app = express();

// Set the views directory and view engine for JSX
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to support HTTP verbs (PUT, DELETE) where the client doesn't support it
app.use(methodOverride('_method'));

// Database connection


// Import router from the places controller
const placesController = require('./controllers/places');

// Use places controller for all "/places" routes
app.use('/places', placesController);

// Route for the home page
app.get('/', (req, res) => {
  res.render('home'); // Renders the "home.jsx" file from the views directory
});

// Wildcard route for handling 404 errors
app.use((req, res) => {
  res.status(404).render('error404'); // Renders "error404.jsx" for not found errors
});

// Define the server port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the provided port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Confirmation the server is running
});

// Exports the app for testing or flexibility in execution
module.exports = app;
