import express from 'express'
const app = express()
import cors from 'cors'
import router from './routes/routes.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)

export default app