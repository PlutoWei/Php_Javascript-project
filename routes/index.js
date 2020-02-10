const express = require("express");
const router = express.Router();
const Util = require("../controller/user");
//delete. used for testing api/
const decodeUser = require('../middleware/decodeUser')
/**========================== */
const config = require("../config/main");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");
const requireAuth = passport.authenticate("jwt", { session: false });
const svgCaptcha = require("svg-captcha");
const authorize = require("../helper/authorize");
const auth = require("./auth");
const Role = require("../helper/roles");

const User = require("../models/user");
const rCaptcha = require("../models/regcaptcha");

// require("../config/passport")(passport);

// Register new users
router.post("/register", function(req, res) {
  //find regCaptcha
  var captcha = req.body.captcha;
  var captcha_id = req.body.captcha_id;
  var lowerCase = captcha.toLowerCase();
  rCaptcha.findOne({ _id: captcha_id }, function(err, captcha) {
    if (err) {
      throw err;
    } else {
      console.log("Yahoo captcha is", captcha);
      console.log("This is it", captcha.captcha);
      if (
        !req.body.email ||
        !req.body.password ||
        lowerCase != captcha.captcha
      ) {
        if (lowerCase != captcha.captcha) {
          res.json({ success: false, message: "Invalid Captcha" });
        } else {
          res.json({
            success: false,
            message: "Please enter email and password or Invalid Captcha."
          });
        }
      } else {
        User.findOne({ email: req.body.email }, function(err, user) {
          console.log(req.body.email, req.body.password);
          if (user) {
            return res.status(400).json({
              success: false,
              message: "That email address already exists."
            });
          } else {
            const password = req.body.password;
            const value = Util.setPassword(password);
            const newUser = new User({
              email: req.body.email,
              username: req.body.username,
              pubKey: req.body.pubKey,
              privKey: req.body.privKey,
              password: value,
              earnings: 0,
              first_name: req.body.firstname,
              last_name: req.body.lastname,
              country: req.body.country,
              phone_number: req.body.phone_number,
              userType: req.body.userType
            });

            // Attempt to save the user
            newUser.save(function(err, user) {
              if (err) {
                return res.status(400).json({
                  success: false,
                  message: "That email address already exists."
                });
              }
              console.log("Here is the user detail", user);
              res.status(201).json({
                success: true,
                message: "Successfully created new user."
              });
            });
          }
        });
      }
    }
  });
});

// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post("/authenticate", function(req, res) {
  console.log("authenticate username", req.body);
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Authentication failed. User not found."
      });
    } else {
      // Check if password matches
      const password = req.body.password;
      let value = Util.validatePassword(password);

      if (value == user.password) {
        console.log(user.toJSON());
        const token = jwt.sign({sub: user._id, role: user.userType}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        var profile = { username: user.username, userType: user.userType };

        res
          .status(200)
          .json({ success: true, token: "jwt " + token, profile: profile });
      } else {
        res.status(401).json({
          success: false,
          message: "Authentication failed. Passwords did not match."
        });
      }
    }
  });
});

router.post("/captcha", function(req, res) {
  var options = {
    size: 6,
    ignoreChars: "0o1ilL8B",
    noise: 1,
    color: false,
    background: "#D5DBDB"
  };
  var captcha = svgCaptcha.create(options);
  var c = captcha.text;
  var lowerCase = c.toLowerCase();
  var regCaptcha = new rCaptcha();

  console.log(regCaptcha.id);
  regCaptcha.captcha = lowerCase;

  regCaptcha.save(function(err) {
    if (err) {
      console.log("Error in creating new user captcha: " + err);
      throw err;
    }
    console.log("New User Captcha registration created");
    //return (null, newJob);
    res.json({ captcha: captcha.data, id: regCaptcha.id });
  });
});

router.get('/checkjwt', decodeUser)

module.exports = router;
