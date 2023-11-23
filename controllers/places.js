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
      pic: 'http://placekitten.com/250/250'
    },
    {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'http://placekitten.com/250/250'
    }
    // ... more places can be added here
  ];
  res.render('places/index', { places: places });
});

// ... other routes ...

module.exports = router;
