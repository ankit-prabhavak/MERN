const express = require('express');
const router = express.Router();
const { 
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Define routes

// Get all products
router.get('/products', getProducts);

// Create product
router.post('/products', createProduct);

// Update product
router.put('/products/:id', updateProduct);

// Delete product
router.delete('/products/:id', deleteProduct); 

module.exports = router;
