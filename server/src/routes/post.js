import express from 'express'
import { getPosts, getPostsLimit } from '../controllers/post'
const router = express.Router()

router.get('/all', getPosts)

router.get('/limit', getPostsLimit)

export default router