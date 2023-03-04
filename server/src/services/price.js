import db from '../models'

export const getPricesSerivce = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Price.findAll({
            raw: true,
            attributes: ['code', 'value', 'order']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Có lỗi trong quá trình lấy giá cả.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
