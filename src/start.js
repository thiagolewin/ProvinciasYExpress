import express from "express";
import cors from 'cors'
import ProvinceRouter from "./controllers/province-controller.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use("/api/provinces", ProvinceRouter)

app.listen(port,()=> {
    console.log("qa")
})