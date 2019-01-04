const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/key");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    // this accessToken is used when we successfully signed in with Google
    // so we can do a lot of things with this: added to our database and etc...
    // refresh token allows us to refresh the access token 
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

// note 'google' tells passport to use the Google Strategy set up above
// scode specifies the information we want to access and send it to Google
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// when hitting this endpoint, there will be a code attached which will be used by passport so that we can retrieve user's information on there behalf
app.get("/auth/google/callback", passport.authenticate("google"));

// enable dynamic port binding
// if there is any environment variable that is predifined, then use that environment variable as our port
// Otherwise, use 5000!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("we are listening on :" + PORT);
});
