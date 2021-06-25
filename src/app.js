import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersDB', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();


ReactDom.render(<App />, document.getElementById("root"));

const entrySchema = new mongoose.Schema({
    
})

