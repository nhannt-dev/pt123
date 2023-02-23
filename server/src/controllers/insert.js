import { insertService } from "../services/insert"

export const insert = async (req, res) => {
    try {
        const response = await insertService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi trong quá trình chèn dữ liệu: ' + error
        })
    }
}