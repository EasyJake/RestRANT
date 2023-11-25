const mongoose = require('mongoose');

// Schema definition for the Place model
const placeSchema = new mongoose.Schema({
  // Name field with type String, required
  name: {
    type: String,
    required: true,
    maxlength: 100 // Assuming you want a max length on the name
  },
  // Picture field with type String, default value if not provided
  pic: {
    type: String,
    default: '/images/default.jpg'
  },
  // Cuisines field with type String, required
  cuisines: {
    type: String,
    required: true
  },
  // City field with type String, not required
  city: String,
  // State field with type String, not required
  state: String,
  // Founded field with type Number, adding validation for year
  founded: {
    type: Number,
    min: [1673, 'Surely not before Columbus?'], // Validation: Year must be after 1673
    max: [new Date().getFullYear(), 'Year must not be in the future'] // Validation: Year must not be in the future
  }
});

// Compiling the schema into a model so it has methods to interact with the database
const Place = mongoose.model('Place', placeSchema);

// Exporting the Place model to be used in other parts of the application
module.exports = Place;
