const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const User = require('./models/User')
const Mail = require('./models/Mail')
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");
const webpush = require('web-push');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();


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
/////mailing////
      var stars = "* * * * *";
      Mail.find({},function(err, entries){
        if(err){
          console.log(err);
        }
        else{
          entries.forEach(function(entry){
            console.log(entry);
            var ep = entry.plan;
            var rec = "recurring";
            var wee = "weekly";
            var mon = "monthly";
            var ye = "yearly";
            if(ep === rec){
              stars="1 * * * * *";
            }
            if(ep === wee){
              stars="* * * * 7";
            }
            if(ep === mon){
              stars="* * 2 * *";
            }
            if(ep === ye){
              stars="* * * 7 *";
            }
            // else{
            //   console.log(stars);
            // }

            var transporter = nodemailer.createTransport({
              service: 'gmail',
              // sendmail: true,
              auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
              }
              
          });


          entry.emails.forEach(function(email){
            var mailOptions = {
              from: entry.company,
              to: email,
              subject: entry.subject,
              text: entry.mailbody
            };
            console.log(entry.company);
            cron.schedule(stars, () => {
              // Send e-mail
              transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });
              });
          });
          });
        }
      });






app.use(express.json()); 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('.')
})

//routes to store data in mongo-mongo

app.get('/mailDetails', (req,res)=>{
  Mail.find((err,data)=>{
    if(err){
      console.log(err)
      res.status(500).send(err)
    }else{
        console.log(data);
          res.status(200).send(data);
      }
  })
})

app.post('/submitForm',(req,res)=>{
  console.log(req.body);

  Mail.create(req.body);
  res.json(req.body);
  console.log(req.body)
})

// signup page 
app.get("/signup", function(req,res){
    res.render("signup");
});



app.post("/signup",(req,res)=>{
    var user = req.body.username;
    var pass = req.body.password;

    User.findOne({email: user}).then(user =>{
        if(user){
            console.log("email already exists...");
            return res.status(400).json({ "email": "Email already exists" });
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

app.post("/home", function(req,res){
  res.redirect("/");
})


app.listen(port, function(req,res){
    console.log(`App running on localhost ${port}`)
})