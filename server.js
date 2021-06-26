const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const User = require('./models/User')
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");

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
    "use strict";

    var alert;  //  added this in to fix

    User.findOne({email: user}).then(user =>{
        if(user){
            // alert('hvhvgvjhy')
            console.log("email already exists...");
            return res.status(400).json({ email: "Email already exists" });
        }else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.username,
                password: req.body.password
              }); 
              
              // Hash password before saving in database
              bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //   if (err){
                    //       console.log(err);
                    //   }
                      newUser.password = hash;
                      newUser
                      .save()
                      .then(user => res.status(200).json(user))
                      .catch(err => console.log(err));
                    });
                });

                // res.status(200).json({email:req.body.username});
            }
    })

})

 

// login page \\


app.get("/login", function(req,res){
    res.send("login");
})

app.post("/login", (req, res)=>{
    var id = req.body.username;
    var ps = req.body.password;

    User.findOne({email: id}).then(user=>{
        if(!user){
            console.log('email is not correct...')
            return res.status(404).json({emailnotfound:"Email not found"});
        }
         // Check password
    bcrypt.compare(ps, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
            );
            console.log("password is cool....")
        } else {
            console.log("wrong ps");
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    })
})


app.listen(port, function(req,res){
    console.log(`App running on localhost ${port}`)
})