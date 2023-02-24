import express from "express"
import { getCategories } from "../controllers/category"

const router = express.Router()

router.get('/all', getCategories)

export default router