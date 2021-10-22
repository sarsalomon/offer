const Router = require('express')
const memberController = require('../controllers/memberController')
const router = new Router()

router.get('/',memberController.membersget)
router.post('/add',memberController.memberadd)
router.post('/getmember/:id',memberController.memberget)
router.post('/updatemember',memberController.memberupdate)
router.post('/deleteomember',memberController.memberdelete)

module.exports = router