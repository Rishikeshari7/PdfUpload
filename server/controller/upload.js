const user = require("../model/UploadSchema")
const pdfUploadCloudinary=require("../controller/fileUpload")

const uploadDetails= async(req,res)=>{
    try{
        const {firstName,lastName,email,contactNumber}=req.body;
        const uploadedFile=req.files.pdfFile;
        const updatePdf= await pdfUploadCloudinary(uploadedFile)
        console.log("UploadedFile",updatePdf,uploadedFile.tempFilePath);
        console.log("Working 2");
        if (!updatePdf) {
            return res.status(400).json({
              success: false,
              msg: "No file uploaded",
            });
          }
        const updateUser = await user.create({firstName,
            lastName,email,contactNumber,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            pdf:updatePdf.secure_url,
        })
        return res.status(200).json({
            success:true,
            data:updateUser,
            msg:"User uploaded successfully",
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            msg:"Erro in User upload",
        })
    }

}
const getAllDetails=async(req,res)=>{
    try{
        const data=await user.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success:true,
            data:data,
            msg:"User data fetch successfully",
        })
    }
    catch(err){
        return res.status(200).json({
            success:false,
            error:err,
            msg:"can't fetch User data",
        })
    }
}
module.exports={uploadDetails,getAllDetails}