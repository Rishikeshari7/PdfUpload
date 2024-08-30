const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    require: true,
    trim: true,
  },
  lastName: {
    type: "String",
    require: true,
    trim: true,
  },
  email: {
    type: "String",
    require: true,
    trim: true,
  },
  contactNumber: {
    type: "Number",
    require: true,
  },
  image: {
    type: "String",
  },
  pdf: {
    type: "String",
  },
  createdAt: { 
    type: Date, 
    default: Date.now
 },
});

module.exports = mongoose.model("User", UserSchema);
