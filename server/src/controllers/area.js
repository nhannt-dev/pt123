import { getAreasSerivce } from "../services/area"

export const getAreas = async (req, res) => {
    try {
        const response = await getAreasSerivce()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi trong việc lấy thông tin khu vực: ' + error
        })
    }
}