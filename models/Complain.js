const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const userSchema = new Schema({
  userId: {
    type: Schema.type.objectId,
    ref: "User",
  },
  discription: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  pnr: {
    type: String,
    required: true,
  },

  isSolved: {
    type: boolean,
    enum: [true, false],
  },

  // confirmPassword: {
  //   type: String,
  //   required: true,
  //   validate: {
  //     validator: function(value) {
  //       return value === this.password;
  //     },
  //     message: 'Passwords do not match.'
  //   }
  // },
});
// userSchema.pre('save', function(next) {
//   this.confirmPassword = undefined;
// });
// userSchema.pre("save", async function (next) {
//   this.confirmPassword = undefined;
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.comparePassword = async function (password) {
//   console.log(password, this.password);
//   return await bcrypt.compare(password, this.password);
// };
// userSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000,
//   });
// };
const Complain = mongoose.model("Complain", userSchema);
module.exports = Complain;
