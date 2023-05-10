import mongoose from 'mongoose'
import app from './app.js'
import config from './config/index.js'

(async () => {
    try {
        await mongoose.connect(config.MONGODB_URL)
        console.log("DB Connected Successfully...!")

        app.on("error", (error) => {
            console.log("DB is not connected")
            throw error
        })

        const onListening = () => {
            console.log(`App is listening on PORT ${config.PORT}`)
        }

        app.listen(config.PORT, onListening)
    } catch (error) {
        console.log("ERROR", error)
        throw error
    }
})()