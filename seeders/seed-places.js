// Import the models from the models directory. This is required to interact with the database.
const db = require('../models');

// Define an array of place objects to seed the database. Each object contains fields that match the Place schema.
const places = [
  {
    name: 'H-Thai-ML', // The name of the place
    city: 'Seattle', // The city where the place is located
    state: 'WA', // The state where the place is located
    cuisines: 'Thai, Pan-Asian', // The types of cuisines the place offers
    pic: '/images/h-thai-ml-tables.jpg', // The picture url for the place
    founded: 1989 // The year the place was founded
  }, 
  {
    name: 'Coding Cat Cafe', // The name of another place
    city: 'Phoenix', // The city where the second place is located
    state: 'AZ', // The state where the second place is located
    cuisines: 'Coffee, Bakery', // The types of cuisines the second place offers
    pic: '/images/coffee-cat.jpg', // The picture url for the second place
    founded: 2020 // The year the second place was founded
  }
];

// Remove all existing documents from the Place collection before seeding.
db.Place.deleteMany({})
  .then(() => {
    // Seed the database with the new place objects defined above.
    return db.Place.create(places);
  })
  .then(() => {
    // Log a success message to the console if the database was seeded successfully.
    console.log('Success! The places have been added to the database.');
    process.exit(); // Exit the node process successfully.
  })
  .catch(err => {
    // Log an error message to the console if the seeding failed.
    console.error('Failure! An error occurred while seeding the database:', err);
    process.exit(1); // Exit the node process with an error status.
  });
