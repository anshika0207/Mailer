const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator'); 

const entrySchema = new Schema({
    email: {
        type:String, 
        validate: [validator.isEmail, 'invalid email']
    },
    password: String
})

module.exports = mongoose.model("entry", entrySchema);
