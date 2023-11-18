const express = require('express');
const app = express();
// Define the home page route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  // Start the server on port 3000
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  