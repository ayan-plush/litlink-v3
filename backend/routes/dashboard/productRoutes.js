const productController = require('../../controllers/dashboard/productController')

const router = require('express').Router()

router.post('/product-add',productController.add_product)
router.post('/products-get', productController.get_products)
router.get('/product-get/:productId', productController.get_product)
router.post('/product-update', productController.update_product)
router.post('/product-image-update', productController.update_product_image)




module.exports = router