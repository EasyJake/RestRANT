require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('Missing MONGO_URI in .env file.');
  process.exit(1); // Exit the process if the MongoDB URI is not defined
}

mongoose.connect(mongoUri)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Optionally exit the process on a database connection error
});

module.exports.Place = require('./places'); // Ensure this matches the name of your place model file
module.exports.Comment = require('./comment');





// require('dotenv').config()
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('mongo connected succesfully'))
// .catch(err => console.error('mongo connection error:', err));

// module.exports.Place = require('./places')
// module.exports.Comment = require('./comment')