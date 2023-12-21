const mongoose = require('mongoose');

// Define the Place schema with its fields and validation rules
const placeSchema = new mongoose.Schema({
  // Name field: A string that is required and has a maximum length of 100 characters
  name: {
    type: String,
    required: true,
    maxlength: 100 
  },
  // Picture field: A string that defaults to a specified path if no picture URL is provided
  pic: {
    type: String,
    default: '/images/default.jpg'
  },
  // Cuisines field: A string that is required to describe the types of food served
  cuisines: {
    type: String,
    required: true 
  },
  // City field: An optional string that records the city where the place is located
  city: String,
  // State field: An optional string that records the state where the place is located
  state: String,
  // Founded field: A number with validation rules to ensure the year is realistic and not in the future
  founded: {
    type: Number,
    min: [1673, 'Surely not before Columbus?'],
    max: [new Date().getFullYear(), 'Year must not be in the future']
  },
  // Comments field: An array that will store ObjectIds of Comment documents related to this place
  comments: [{
    type: mongoose.Schema.Types.ObjectId, // Each entry is an ObjectId
    ref: 'Comment' // This indicates the ObjectId comes from the Comment model
  }]
});

// Add a custom instance method to the Place schema
placeSchema.methods.showEstablished = function() {
  // This method returns a string with information about when the place was established
  // If 'founded' is provided, it will include the year in the message
  return this.founded
    ? `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
    : `${this.name} is located in ${this.city}, ${this.state}.`;
};

// Compile the schema into a model which gives us a class with which we can interact with the database
const Place = mongoose.model('Place', placeSchema);

// Export the Place model to make it accessible in other parts of the application
module.exports = Place;

