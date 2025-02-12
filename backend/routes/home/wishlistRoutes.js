const wishlistControllers = require('../../controllers/home/wishlistControllers')

const router = require('express').Router()

router.post('/wishlist/product/add-to-wishlist', wishlistControllers.add_to_wishlist )
router.get('/wishlist/product/get-wishlist/:userId',wishlistControllers.get_wishlist)
router.post('/wishlist/product/delete-from-wishlist', wishlistControllers.delete_from_wishlist )


module.exports = router