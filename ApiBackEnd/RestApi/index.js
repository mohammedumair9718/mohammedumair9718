import express from "express"
const app=express()
import dotenv from 'dotenv'
import userRouter from "./routers/userRegisterRouter.js"
import dbConnect from "./db/connection.js"
dotenv.config()

import cors from 'cors'//backend connect to frantend
// Use CORS middleware
app.use(cors());



const port=process.env.PORT
const dburl=process.env.DBURL
const dbname=process.env.DBNAME  

dbConnect(dburl,dbname)

app.use(express.json())

app.use('/user',userRouter)



app.listen(port,()=>{
console.log(`server started at port number ${port}`)
})
