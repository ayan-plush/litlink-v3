const authControllers = require('../controllers/authControllers')
const { authMiddleware } = require('../middlewares/authMiddleware')

const router = require('express').Router()

router.post('/admin-login', authControllers.admin_login)
router.post('/seller-login', authControllers.seller_login)
router.post('/seller-register', authControllers.seller_register)
router.get('/get-user',authMiddleware, authControllers.getUser)
router.post('/profile-image-upload',authMiddleware, authControllers.profile_image_upload)
router.post('/shopInfo-upload',authMiddleware, authControllers.shopInfo_upload)
router.get('/logout', authControllers.logout)



module.exports = router