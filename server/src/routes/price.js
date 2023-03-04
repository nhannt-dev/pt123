import express from 'express'
import { getPrices } from '../controllers/price'

const router = express.Router()

router.get('/all', getPrices)

export default router