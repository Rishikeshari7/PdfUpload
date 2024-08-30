require("dotenv").config();
const mongoose = require("mongoose");
const DBConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connect SuccessFully") ;
    })
    .catch((err) => {
        console.log("Error in DB Connect",err) ;
    });
};
module.exports = DBConnect;
