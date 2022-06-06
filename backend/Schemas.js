const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: String,
    chatId: Number
});

module.exports = {
    UserSchema
}