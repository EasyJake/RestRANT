// controllers/places.js
const express = require('express');
const router = express.Router();

// Array holding mock data for places
let places = [
  // The places objects
  {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
  }
  // Additional places can be added here
];

// Route to display all places in the index view
router.get('/', (req, res) => {
  res.render('places/index', { places: places });
});

// Route to serve the form for editing a place's details
router.get('/:id/edit', (req, res) => {
  // Logic to find the place by id and send that data to the edit form view
});

// Route to display details of a specific place by id
router.get('/:id', (req, res) => {
  // Logic to find the place by id and send that data to the show view
});

// Route to serve the form for adding a new place
router.get('/new', (req, res) => {
  res.render('places/new'); // Renders the form for adding a new place
});

// Route to handle the creation of a new place from form submission
router.post('/', (req, res) => {
  // Extract form data from req.body and add a new place object to the array
  // Redirect to the places list or the new place's detail page after adding
});

// Export the router for mounting in the main application file
module.exports = router;
