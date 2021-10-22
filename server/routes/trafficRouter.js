const Router = require('express')
const trafficController = require('../controllers/trafficController')
const router = new Router()

router.get('/',trafficController.trafficsget)
router.get('/:code',trafficController.trafficredirect)
router.post('/add',trafficController.trafficadd)
router.post('/gettraffic/:id',trafficController.trafficget)
router.post('/updatetraffic',trafficController.trafficupdate)
router.post('/deletetraffic',trafficController.trafficdelete)

module.exports = router