const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, require: true   },
    password: { type: String, require: true },
    birthday: { type: Date, require: true },
    gender: { type: String, require: true },
    tel: { type:Number, require: true },
    email: { type: String, require: true },
    address: {
      houseNo:{type:String ,require: true},
      villageNo:{type:String ,},
      subDistrict:{type:String ,require: true},
      subArea:{type:String ,require: true},
      area:{type:String ,require: true},
      postalCode:{type:Number ,require: true},
      
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = User = mongoose.model("users", UserSchema);
