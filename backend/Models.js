const mongoose = require("mongoose");
const schemas = require("./Schemas");

const User = mongoose.model("User", schemas.UserSchema);

module.exports = {
    User
}