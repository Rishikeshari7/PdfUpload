const cloudinary = require("cloudinary").v2;
const pdfUploadCloudinary = async (file) => {
  try {
    console.log("good 1",file,file.tempFilePath);
    const upload = await cloudinary.uploader.upload(file.tempFilePath, {
      folder:"PdfUpload",
      public_id:file.name,
      resource_type:"auto",
    });
    console.log("good 2");
    return upload;
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in file upload..",
    });
  }
};
module.exports=pdfUploadCloudinary;
