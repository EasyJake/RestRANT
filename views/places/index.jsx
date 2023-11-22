


// index.js or routes.js or a similar file
const express = require('express');
const path = require('path');
const app = express();
const Places = require('./views/places/'); // Adjust the path as necessary

// ... other setup ...

app.get('/places', (req, res) => {
    res.render('Places'); // Use the Places component for this route
});

// ... other routes and app.listen ...
