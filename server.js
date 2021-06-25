const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const Entry = require('./models/Entry')
const cors = require('cors');

const port = process.env.PORT || 9000
const app = express();
app.use(cors());

//password = x8OmczyJQTSm9niJ
const mongoURL = 'mongodb+srv://girlgeeksHackathon:x8OmczyJQTSm9niJ@cluster0.7ty9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connect', function() {
    console.error('MongoDB has connected successfully');
  });

  const db = mongoose.connection;

db.once('open',()=>{
    console.log("DB connected.");
})


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

app.post("/login", (req, res)=>{
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

    // console.log("idhr aa rha h...")
})


app.listen(port, function(req,res){
    console.log(`App running on localhost ${port}`)
})