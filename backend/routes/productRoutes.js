const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers'); 

// DET ALL PRODUCTS FROM DB 
// @route GET /API/PRODUCTS 
router.get('/',getAllProducts);


// DET ALL  a PRODUCTS by ID  FROM DB 
// @route GET /API/PRODUCTS/:id
router.get('/:id',getProductById);

module.exports = router; 