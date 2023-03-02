const { getCategoriesSerivce } = require("../services/category")

export const getCategories = async (req, res) => {
    try {
        const response = await getCategoriesSerivce()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi trong việc xem danh mục: ' + error
        })
    }
}