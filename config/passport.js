
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const Util = require("../controller/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
    },
    (email, password, done) => {
      User.findOne({ email })
        .then(user => {
          console.log(user)
          if (!user) {
            return done(null, false, {
              errors: { "email or password": "is invalid" }
            });
          }
          return done(null, user);
        })
        .catch(user);
    }
  )
);
