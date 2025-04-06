const sellerController = require('../../controllers/dashboard/sellerController')
const { authMiddleware, isAdmin } = require('../../middlewares/authMiddleware');

const router = require('express').Router()

router.post('/sellers-request-get',isAdmin, sellerController.get_seller_request)
router.post('/sellers-get',isAdmin, sellerController.get_sellers)
router.post('/seller-get/:sellerId',isAdmin, sellerController.get_seller)
router.post('/seller-status-update',isAdmin, sellerController.update_seller_status)




module.exports = router