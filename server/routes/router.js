const express = require('express');
const router = express.Router();

const services = require("../services/render")

const controller = require('../controller/controller')

router.get('/', services.homeRoutes)

router.get('/add-product', services.add_product)

router.get('/update-product', services.update_product)

// API
router.post('/api/product', controller.createProduct)
router.get('/api/product', controller.findProduct)
router.put('/api/product/:id', controller.updateProduct)
router.delete('/api/product/:id', controller.deleteProduct)

module.exports = router