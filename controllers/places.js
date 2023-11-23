// controllers/places.js
const express = require('express');
const router = express.Router();

// Mock data for places, ideally this would come from a database
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

// GET /places - List all places
router.get('/', (req, res) => {
  res.render('places/index', { places: places });
});

// GET /places/:id/edit - Form to edit a specific place
router.get('/:id/edit', (req, res) => {
  // ... logic to render edit page for place with req.params.id
});

// GET /places/:id - Show details about a specific place
router.get('/:id', (req, res) => {
  // ... logic to render show page for place with req.params.id
});

// Export the router so it can be mounted in the main application file
module.exports = router;
