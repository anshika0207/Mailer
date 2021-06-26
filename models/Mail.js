const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator'); 

const mailSchema = new Schema({
    company: String,
    subject: String,
    mailbody: String,
    emails: [{email: String}],
    plan: String,
    // date: Date.now()
})

module.exports = mongoose.model("mails", mailSchema);