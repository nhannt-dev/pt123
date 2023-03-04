import express from "express"
import { createPricesArea, insert } from "../controllers/insert"
const router = express.Router()

router.post('/', insert)

router.post('/create', createPricesArea)

export default router