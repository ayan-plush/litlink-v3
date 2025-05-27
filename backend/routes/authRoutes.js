const authControllers = require('../controllers/authControllers')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const passport = require('passport');
const { createToken } = require('../utils/tokenCreate');
const router = require('express').Router()

router.post('/admin-login', authControllers.admin_login)
router.post('/seller-login', authControllers.seller_login)
router.post('/seller-register', authControllers.seller_register)
router.post('/mail-verification', authControllers.mail_verify)
router.post('/get-user', authControllers.getUser)
router.post('/profile-image-upload',authMiddleware, authControllers.profile_image_upload)
router.post('/shopInfo-upload', authControllers.shopInfo_upload)
router.get('/logout', authControllers.logout)
router.get('/seller/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/seller/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  async (req, res) => {
    const token = await createToken({
      id: req.user.id,
      role: req.user.role
    });

    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    res.redirect(`${process.env.BASE_URL}/googleVerify/${token}`); // or wherever you want to send the user
  }
);


module.exports = router