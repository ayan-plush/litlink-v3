const productController = require('../../controllers/dashboard/productController')
const { authMiddleware, isAdmin } = require('../../middlewares/authMiddleware');

const router = require('express').Router()

router.post('/product-add',productController.add_product)
router.post('/products-get',productController.get_products)
router.post('/get-lends',productController.get_lend)
router.get('/product-get/:productId', productController.get_product)
router.post('/product-update',authMiddleware, productController.update_product)
router.post('/product-image-update', productController.update_product_image)
router.post('/get-simillar-books', productController.get_simillar_books)





module.exports = router