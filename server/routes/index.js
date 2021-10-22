const Router = require('express')
const router = new Router()
const userRouter    = require('./userRouter')
const memberRouter    = require('./memberRouter')
const offerRouter   = require('./offerRouter')
const trafficRouter = require('./trafficRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/member', memberRouter)
router.use('/offer', offerRouter)
router.use('/traffic', trafficRouter)
router.use('/category', categoryRouter)

module.exports = router