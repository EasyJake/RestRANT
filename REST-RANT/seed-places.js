const db = require('../models')

const places = [
  // Add your seed data here
]

db.Place.deleteMany({})
  .then(() => db.Place.create(places))
  .then(() => {
    console.log('Successfully seeded the database.')
    process.exit()
  })
  .catch(err => {
    console.error('Seeding failed:', err)
    process.exit(1)
  })
