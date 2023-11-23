// places.js
const express = require('express');
const router = express.Router();

// GET /places
router.get('/', (req, res) => {
  let places = [
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
    // ... more places can be added here
  ];
  res.render('places/index', { places: places });
});

// ... other routes ...
// GET route for editing a place (this might require a place ID to be specified)
router.get('/:id/edit', (req, res) => {
  // ... logic to render edit page
  res.render('places/edit', { /* data */ });
});

// GET route for showing a place (this also requires a place ID)
router.get('/:id', (req, res) => {
  // ... logic to render show page
  res.render('places/show', { /* data */ });
});


module.exports = router;
