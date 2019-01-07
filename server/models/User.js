const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// the above line is equivalent to (destructuring):
const { Schema } = mongoose;
/**
 * Here mongoose wants to know all the properties that are associated with that collection in mongodb, so we need to define it ahead of time here
 */
const userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema);
