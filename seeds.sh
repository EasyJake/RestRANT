#!/bin/bash

# Define the project directory relative to the user's home directory
PROJECT_DIR="$HOME/Documents/GitHub/RestRANT"

# Ensure we're in the correct directory
cd "$PROJECT_DIR" || { echo "Could not find the REST-RANT project directory. Exiting."; exit 1; }

# --- Part One: Create and Use a Seeder File ---
# The seeder file is used to populate the database with initial data

# Step 1: Create a folder called 'seeders' if it doesn't exist
SEEDERS_DIR="seeders"
mkdir -p "$SEEDERS_DIR"

# Step 2: Create the seeder file if it doesn't exist
SEED_FILE="$SEEDERS_DIR/seed-places.js"
if [ ! -f "$SEED_FILE" ]; then
    # The content for seed-places.js should create sample places
    # This needs to be the actual JavaScript code for seeding
    cat > "$SEED_FILE" << EOF
// const db = require('../models');
// db.Place.create([...])
EOF
fi

# Step 3: In your seed-places.js, require the models folder to access database operations

# Step 4-7: Implement the seeding logic with Mongoose's create() method, error handling, and process termination

# Run the seeder file to generate data
echo "Running the seeder file to populate the database..."
node "$SEED_FILE"

# Check if the seeding was successful
if [ $? -eq 0 ]; then
    echo "Database seeded successfully."
else
    echo "Database seeding failed."
fi

# --- Part Two: Create and Use a Helper Method ---
# Add a custom method to the Place schema in the models folder

# --- Part Three: Add Validations ---
# Add validation to at least one field in the Place schema

# Check Node.js version to ensure compatibility
echo "Node.js version: $(node --version)"

# Reminder to commit changes to git
echo "Remember to commit your changes to git!"

# End of script
