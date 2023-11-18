// Import the required modules
const express = require('express');
const app = express(); // Create an instance of an Express app

// Set up the view engine configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx'); // Set JSX as the view engine
app.engine('jsx', require('express-react-views').createEngine()); // Use the express-react-views engine

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import route controllers
const placesController = require('./controllers/places'); // Controller for places-related routes

// Use the places controller for the '/places' route segment
app.use('/places', placesController);

// Define the root route of the application
app.get('/', (req, res) => {
    res.render('Home'); // Render the Home page using the JSX layout
});

// Use the places controller for the '/places' route segment
app.use('/places', placesController);



// Define a wildcard route for handling 404 errors
app.get('*', (req, res) => {
  res.render('error404'); // Render the error404 view when a 404 error occurs
});


// Define the port number as provided by the environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});
