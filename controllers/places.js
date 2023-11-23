// places.js
const express = require('express');
const router = express.Router();

// Define your route handlers using the 'router' instance.

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
    // You can add more mock places here
  ];
  
  res.render('places/index', { places });
});

// ... other places routes ...

// Export the router
module.exports = router;
