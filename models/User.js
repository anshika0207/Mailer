const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator'); 

const UserSchema = new Schema({
    name: String,
    email: {
        type:String, 
        validate: [validator.isEmail, 'invalid email']
    },
    password: String
})

module.exports = mongoose.model("user", UserSchema);
