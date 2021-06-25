const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("entry", entrySchema);
