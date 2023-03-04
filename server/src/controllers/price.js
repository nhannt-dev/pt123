import { getPricesSerivce } from "../services/price"

export const getPrices = async (req, res) => {
    try {
        const response = await getPricesSerivce()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi trong việc lấy giá cả: ' + error
        })
    }
}