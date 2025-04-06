const categoryController = require('../../controllers/dashboard/categoryController')
const { authMiddleware, isAdmin } = require('../../middlewares/authMiddleware');

const router = require('express').Router()

router.post('/category-add',isAdmin, categoryController.add_category)
router.get('/category-get', categoryController.get_category)



module.exports = router