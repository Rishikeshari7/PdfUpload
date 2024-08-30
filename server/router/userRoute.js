const express = require("express");
const router = express.Router()

const {uploadDetails,getAllDetails}=require("../controller/upload")
router.post("/create",uploadDetails)
router.get("/all",getAllDetails)

module.exports=router