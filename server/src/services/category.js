import db from "../models"

export const getCategoriesSerivce = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Không thể lấy danh mục.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
