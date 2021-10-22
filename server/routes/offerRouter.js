const Router = require('express')
const offerController = require('../controllers/offerController')
const router = new Router()

router.get('/',offerController.offersget)
router.post('/add',offerController.offeradd)
router.post('/getoffer/:id',offerController.offerget)
router.post('/updateoffer',offerController.offerupdate)
router.post('/deleteoffer',offerController.offerdelete)

module.exports = router