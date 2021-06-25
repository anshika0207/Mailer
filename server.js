const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/userloginDB', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const entrySchema = new mongoose.Schema({
    username: String,
    password: String
})

const Entry = mongoose.model('Entry', entrySchema);

// signup page \\


app.get("/signup", function(req,res){
    res.render("signup");
});

app.post("/signup", function(req,res){
    var user = req.body.username;
    var pass = req.body.password;

    var newEntry = new Entry({
        username: user,
        password: pass
    })
    newEntry.save();
    res.render("/login");

})

 

// login page \\


app.get("/login", function(req,res){
    res.send("login");
})

app.post("/login", function(req, res){
    var id = req.body.username;
    var ps = req.body.password;

    Entry.find({}, function(err, entries){
        if(err){
            console.log(err);
        }
        else{
            entries.forEach(entry => {
                if(entry.username === id && entry.password === ps){
                    res.render("/", {
                        user: id
                    });
                }
                else{
                    res.render("/signup");
                }
            });
        }
    })
})


app.listen(9000, function(req,res){
    console.log("App running on localhost")
})