const { registerService, loginService } = require("../services/auth")

exports.register = async (req, res) => {
    const { name, phone, password } = req.body
    try {
        if (!name || !phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin!'
        })
        const response = await registerService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Đăng ký thất bại: ' + error
        })
    }
}

exports.login = async (req, res) => {
    const { phone, password } = req.body
    try {
        if (!phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin!'
        })
        const response = await loginService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Đăng nhập thất bại: ' + error
        })
    }
}