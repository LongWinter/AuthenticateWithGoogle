const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/key");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // note this user.id is the _id that was auto generated from mongodb as an unique identifier for a user record
  // because maybe facebook's userID will be same as google's ID
  // So, we need a unique identifier to avoid this situation
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // this is a relative path that might cause http/https problem, so we need to add one more configuration(proxy: true ==> ask it to trust the proxy) to make it use HTTPs (or make it absolute path)
      callbackURL: keys.callBackURL
    },
    // this accessToken is used when we successfully signed in with Google
    // so we can do a lot of things with this: added to our database and etc...
    // refresh token allows us to refresh the access token
    async (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile: ", profile);
      let existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        // we already have a record with the given profile ID
        // first argument is error, second will be user record
        // since here we found one user, no error ==> null
        done(null, existingUser);
      } else {
        // we don't have a existing ID, so make a new record
        // take the model instance and save it to mongodb (this is async so ....)
        const user = await new User({ googleID: profile.id }).save();
        done(null, user);
      }
    }
  )
);
