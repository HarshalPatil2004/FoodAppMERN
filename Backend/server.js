import dotenv from 'dotenv'
import express from  'express'
import cors from 'cors'
import { connectDB } from './config/connectDB.js'
import foodRouter from './routes/foodroutes.js'
import userRouter from './routes/userRoutes.js'


//app config
const app=express()
const port=4000


//middleware
app.use(express.json())
app.use(cors())
dotenv.config()


//db connection
connectDB()


//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log("Server started")
})