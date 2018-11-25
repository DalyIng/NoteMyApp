const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  familyName: String,
  givenName: String,
  imageUrl: String,
  mail: String,
  googleId: String,
  credits: { type:Number, default: 0}
});

mongoose.model("users", userSchema);
