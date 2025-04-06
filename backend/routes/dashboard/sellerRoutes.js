const sellerController = require('../../controllers/dashboard/sellerController')
const { authMiddleware, isAdmin } = require('../../middlewares/authMiddleware');

const router = require('express').Router()

router.get('/sellers-request-get', sellerController.get_seller_request)
router.get('/sellers-get', sellerController.get_sellers)
router.get('/seller-get/:sellerId', sellerController.get_seller)
router.post('/seller-status-update',isAdmin, sellerController.update_seller_status)




module.exports = router