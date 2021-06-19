const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controllers');

//add product
router.post('/product', products.addProduct);

//get al product
router.get('/product', products.getAllProduct);

//get only one product
router.get('/product/:id', products.getOneProduct);

//update the product
router.put('/product/:id', products.updateProduct);

//delete the product
router.delete('/product/:id', products.deleteProduct);

module.exports = router;
