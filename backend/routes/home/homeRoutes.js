const homeControllers = require('../../controllers/home/homeControllers')

const router = require('express').Router()

router.get('/home/get-categories', homeControllers.get_category_home)
router.get('/home/get-products', homeControllers.get_products_home)
router.get('/home/price-range-latest-product', homeControllers.price_range_product)
router.get('/home/query-products', homeControllers.query_products)
router.get('/home/get-product-details/:productId', homeControllers.get_product_details)
router.get('/home/get-friend-details/:sellerId', homeControllers.get_friend_details)





module.exports = router