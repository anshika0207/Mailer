const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const Entry = require('./models/Entry')


mongoose.connect('mongodb://localhost:27017/userloginDB', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express();

app.use(express.json()); 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('.')
})

// signup page 
app.get("/signup", function(req,res){
    res.render("signup");
});

app.post("/signup",(req,res)=>{
    var user = req.body.username;
    var pass = req.body.password;

    // var newEntry = new Entry({
    //     username: user,
    //     password: pass
    // })
    // newEntry.save();

    Entry.create(req.body);
    res.send("login");

})

 

// login page \\


app.get("/login", function(req,res){
    res.send("login");
})

app.post("/login", function(req, res){
    var id = req.body.username;
    var ps = req.body.password;

    Entry.findOne({username: id } , function(err, entries){
        if(err){
            console.log(err);
        }
        else{
            console.log("logged in successfully!!")
            res.send("found logged in person...")
        }
    })
})


app.listen(9000, function(req,res){
    console.log("App running on localhost")
})