import * as Express from 'express'
import controller from '../controllers/'

const router = Express.Router()

router.get('/', [controller.findAll])

export default router
