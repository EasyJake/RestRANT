const express = require('express');
const router = express.Router();
const db = require('../models'); // Import your Place model

// Delete Route: Delete a specific place by ID
router.delete('/:id', async (req, res) => {
  try {
    const placeId = req.params.id;
    const result = await db.Place.findByIdAndRemove(placeId);
    if (!result) {
      // Place not found
      res.status(404).json({ error: 'Place not found' });
    } else {
      // Place deleted successfully
      res.json({ message: 'Place deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
