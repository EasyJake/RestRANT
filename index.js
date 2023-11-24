// Import the required modules
const express = require('express');
const path = require('path');

// Load environment variables from the .env file
require('dotenv').config();

// Create an instance of an Express app
const app = express();

// Set up the view engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true })); // <--- This line should be here

// Import route controllers
const placesController = require('./controllers/places'); // Controller for places-related routes

// Use the places controller for the '/places' route segment
app.use('/places', placesController);

// Define the root route of the application
app.get('/', (req, res) => {
    res.render('home'); // Render the Home page using the JSX layout (make sure the file name is 'home.jsx')
});

// Define a wildcard route for handling 404 errors
// This should be the last route.
app.use((req, res) => {
    res.status(404).render('error404'); // Render the error404 view when a 404 error occurs
});

// Define the port number as provided by the environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});
