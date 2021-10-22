const Router = require('express')
const categoryController = require('../controllers/categoryController')
const router = new Router()

router.get('/',categoryController.categoriesget)
router.post('/add',categoryController.categoryadd)
router.post('/getcategory/:id',categoryController.categoryget)
router.post('/updatecategory',categoryController.categoryupdate)
router.post('/deletecategory',categoryController.categorydelete)

module.exports = router