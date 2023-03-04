import express from "express"
import { getAreas } from "../controllers/area"
const router = express.Router()

router.get('/all', getAreas )

export default router