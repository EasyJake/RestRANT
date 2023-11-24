const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.Place = require('./places');  // Assuming you have a Place model.
// ... export other models as needed.
