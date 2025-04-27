const express = require('express')
const router = express.Router()
const {getProductHome, getProductDetail} = require('../controllers/productController')

router.get('/',getProductHome)
router.get('/shirt', getProductDetail)

module.exports = router