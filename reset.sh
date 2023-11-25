#!/bin/bash

# Navigate to the root directory of your project
# cd /path/to/your/project

# Remove node_modules directory and package-lock.json file
rm -rf node_modules package-lock.json

# Install your npm packages
npm install express dotenv body-parser express-react-views
npm install method-override

# Start the application
npm start
