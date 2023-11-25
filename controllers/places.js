// Import the Express framework and create a router object
const express = require('express');
const router = express.Router();

// Import the database models, which includes the Place model
const db = require('../models');

// Define the Index Route to list all places
// This route responds to GET requests on the '/places' path
router.get('/', (req, res) => {
  // Use the Place model to query the database for all place documents
  db.Place.find()
    .then(places => {
      // Render the 'places/index' view, passing the places data to it
      res.render('places/index', { places });
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Define the New Route to display a form for creating a new place
// This route responds to GET requests on the '/places/new' path
router.get('/new', (req, res) => {
  // Render the 'places/new' view which contains the form
  res.render('places/new');
});

// Define the Create Route to handle the new place form submission
// This route responds to POST requests on the '/places' path
router.post('/', (req, res) => {
  // Create a new place document in the database using the form data
  db.Place.create(req.body)
    .then(() => {
      // Upon successful creation, redirect the client to the '/places' path
      res.redirect('/places');
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Define the Show Route to display details of a specific place
// This route responds to GET requests on the '/places/:id' path
router.get('/:id', (req, res) => {
  // Find a single place document by its ID in the database
  db.Place.findById(req.params.id)
    .then(place => {
      // Render the 'places/show' view, passing the found place data to it
      res.render('places/show', { place });
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Define the Edit Route to display a form for editing an existing place
// This route responds to GET requests on the '/places/:id/edit' path
router.get('/:id/edit', (req, res) => {
  // Find a single place document by its ID to pre-populate the edit form
  db.Place.findById(req.params.id)
    .then(place => {
      // Render the 'places/edit' view, passing the existing place data to it
      res.render('places/edit', { place });
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Define the Update Route to handle the edit form submission
// This route responds to PUT requests on the '/places/:id' path
router.put('/:id', (req, res) => {
  // Update the specific place document with the form data
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      // Redirect the client to the show page of the updated place
      res.redirect(`/places/${req.params.id}`);
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Define the Delete Route to remove a specific place
// This route responds to DELETE requests on the '/places/:id' path
router.delete('/:id', (req, res) => {
  // Remove the specific place document from the database
  db.Place.findByIdAndRemove(req.params.id)
    .then(() => {
      // Redirect the client to the main list of places after deletion
      res.redirect('/places');
    })
    .catch(err => {
      // Log any errors to the console and render the 'error404' view
      console.error(err);
      res.render('error404');
    });
});

// Export the router for use in the main application file
module.exports = router;
