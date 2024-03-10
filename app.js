import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import imageRouter from './routes/image.js'

const app = express()

app.use(cors({
	origin: 'http://127.0.0.1:5500',
	credentials: true,
}))
app.use(express.json())

app.use("/img", imageRouter)

async function main() {
	await mongoose.connect(process.env.DB_CONNECT + process.env.DB_NAME)
}

main().catch(err => console.log(err))

app.listen(process.env.PORT, () => console.log("Server was runned on port " + process.env.PORT))

