import express from 'express'
import { getPosts } from '../controllers/post'
const router = express.Router()

router.get('/all', getPosts)

export default router