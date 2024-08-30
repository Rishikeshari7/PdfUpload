const cloudinary= require("cloudinary").v2;
require("dotenv").config()

const clodinaryConnect =()=>{
    console.log("process.env.CLOUD_NAME",process.env.CLOUD_NAME," ",process.env.API_KEY," ",process.env.API_SECRET)
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        })
    }
    catch(err){
        console.log("Error in cloudinary connect",err)
    }
}
module.exports=clodinaryConnect