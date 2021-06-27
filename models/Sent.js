const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sentSchema = new Schema({
    name: String,
    status: String,
    subscription: String
});

module.exports = mongoose.model("sent", sentSchema);