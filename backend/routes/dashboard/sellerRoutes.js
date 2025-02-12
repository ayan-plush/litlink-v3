const sellerController = require('../../controllers/dashboard/sellerController')
const { authMiddleware } = require('../../middlewares/authMiddleware')

const router = require('express').Router()

router.get('/sellers-request-get',authMiddleware, sellerController.get_seller_request)
router.get('/sellers-get',authMiddleware, sellerController.get_sellers)
router.get('/seller-get/:sellerId',authMiddleware, sellerController.get_seller)
router.post('/seller-status-update',authMiddleware, sellerController.update_seller_status)




module.exports = router