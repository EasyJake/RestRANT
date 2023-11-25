// Load environment variables from .env file
require('dotenv').config();

// Import Mongoose to work with MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB using the URI provided in the environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // Use the new URL parser for MongoDB connection strings
  useUnifiedTopology: true // Use the unified topology for MongoDB connections
});

// Export the Place model from the place.js file
module.exports.Place = require('./place'); // Assuming you have a Place model defined

// Export other models as needed
// module.exports.OtherModel = require('./otherModel');
