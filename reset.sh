#!/bin/bash

# Navigate to the root directory of your project
# cd /path/to/your/project

# Create or overwrite the .env file with the required environment variables
cat <<EOT > .env
# Correct the environment variable name and provide the full MongoDB URI
MONGO_URI=mongodb://localhost:27017/places

# Set the port for your application to run on
PORT=3000

# Add other environment variables as needed

EOT

# Remove node_modules directory and package-lock.json file
rm -rf node_modules package-lock.json

# Install your npm packages
npm install express dotenv body-parser express-react-views
npm install method-override

# Start the application
npm start
