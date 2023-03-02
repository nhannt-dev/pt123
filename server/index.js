require('dotenv').config()
import express from "express"
import cors from "cors"
import morgan from "morgan"

import initRoutes from "./src/routes"
import connectDatabase from "./src/config/connect"

const app = express()
const PORT = process.env.PORT || 8888

app.use(morgan('dev'))
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDatabase()

app.listen(PORT, () => console.log(`Server đang chạy tại địa chỉ: http://localhost:${PORT}`))