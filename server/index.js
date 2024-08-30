const express = require("express")
const app = express()
const cors = require("cors")
const DBConnect=require("./config/connectDB")
require("dotenv").config()
const router = require("./router/userRoute")
const clodinaryConnect= require("./config/cloudinary")
const fileUpload=require("express-fileupload")

app.use(express.json())
app.use(cors({
    origin:"https://pdf-upload-mu.vercel.app",
    credentials:true,
}))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))

app.use("/",router)


app.get("/",(req,res)=>{
    res.send(
        "Hello upload"
    )
})
DBConnect();
clodinaryConnect();
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(
        `App is listen @ ${PORT}`
    )
})