// routes/admin.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/food.js');

router.post('/add-product', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json({ success: true, message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
