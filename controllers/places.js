// controllers/places.js
const express = require('express');
const router = express.Router();

// Array holding mock data for places
let places = [
  // Define the places objects here
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

// Route to serve the form for adding a new place
// This needs to be above the '/:id' parameter route to prevent conflict
router.get('/new', (req, res) => {
  res.render('places/new'); // Renders the form for a new place
});

// Route to serve the form for editing a place's details
router.get('/:id/edit', (req, res) => {
  // Logic to find the place by id and send that data to the edit form view
});

// Route to display details of a specific place by id
router.get('/:id', (req, res) => {
  // Logic to find the place by id and send that data to the show view
});

// POST /places - Create a new place
router.post('/', (req, res) => {
  let newPlace = {
    name: req.body.name,
    pic: req.body.pic,
    cuisines: req.body.cuisines,
    city: req.body.city,
    state: req.body.state
  };
  // Add the new place to your data store (e.g., push to an array, save to a database)
  // For now, we'll just pretend to add it to an array
  places.push(newPlace);
  // Redirect to the places list or the new place's detail page
  res.redirect('/places');
});


// Export the router for mounting in the main application file
module.exports = router;
