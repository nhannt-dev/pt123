import { getPostsService, getPostsLimitService } from "../services/post"

export const getPosts = async (req, res) => {
    try {
        const response = await getPostsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có vấn đề trong việc lấy danh sách bài đăng ' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
    const { page } = req.query
    try {
        const response = await getPostsLimitService(page)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có vấn đề trong việc lấy danh sách bài đăng ' + error
        })
    }
}