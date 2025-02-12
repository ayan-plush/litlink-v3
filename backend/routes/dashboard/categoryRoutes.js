const categoryController = require('../../controllers/dashboard/categoryController')

const router = require('express').Router()

router.post('/category-add', categoryController.add_category)
router.get('/category-get', categoryController.get_category)



module.exports = router