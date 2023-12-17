// Load environment variables from .env file
require('dotenv').config();

// Import Mongoose to work with MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB using the URI provided in the environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // Deprecated - You may remove this line
  useUnifiedTopology: true // Deprecated - You may remove this line
});

// Set mongoose's Promise to use global Promise
mongoose.Promise = global.Promise;

// Export the models
module.exports.Place = require('./places'); // Ensure the file name matches exactly, including case
module.exports.Comment = require('./comment'); // Ensure the file name matches exactly, including case
