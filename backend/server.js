import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const app = express()

app.get("/store", (req, res) => {})

const connectDB = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI)
    if (connection) {
      const PORT = process.env.PORT
      app.listen(PORT, () => {
        console.log(`Server Started At http://localhost:${PORT}`)
      })
      console.log("db connected")
    }
  } catch (error) {
    console.log(error)
  }
}

connectDB()
