const mongoose = require('mongoose');

// Schema definition for the Place model
const placeSchema = new mongoose.Schema({
  // Name field with type String, required
  name: {
    type: String,
    required: true,
    maxlength: 100 // Assuming we want a max length on the name
  },
  // Picture field with type String, default value if not provided
  pic: {
    type: String,
    default: '/images/default.jpg' // Default image if none is provided
  },
  // Cuisines field with type String, required
  cuisines: {
    type: String,
    required: true // Cuisines are required to describe the food served
  },
  // City field with type String, not required
  city: String, // Optional city of the place
  // State field with type String, not required
  state: String, // Optional state of the place
  // Founded field with type Number, adding validation for year
  founded: {
    type: Number,
    min: [1673, 'Surely not before Columbus?'], // Validation: Year must be realistic
    max: [new Date().getFullYear(), 'Year must not be in the future'] // Validation: Year must not be in the future
  }
});

// Adding a custom instance method to the schema
placeSchema.methods.showEstablished = function() {
  // This method returns a string describing when the place was established
  // We check that the necessary properties exist before using them
  return this.founded
    ? `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
    : `${this.name} is located in ${this.city}, ${this.state}.`;
};

// Compiling the schema into a model so we have methods to interact with the database
const Place = mongoose.model('Place', placeSchema);

// Exporting the Place model so it can be used in other parts of the application
module.exports = Place;
