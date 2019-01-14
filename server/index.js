const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/key");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
// require passport.js file to make use of it in this project, since we are not returning anything ==> we don't need to assign it to a const var
require("./services/passport");

// connect our remote mongoDB Atlas
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
// require that function we exported from authRoutes.js so that we can call that function
// a better way to do this is: require('./routes/authRoutes')(app) and put this after where we declare app
// const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(
  cookieSession({
    maxAge: 10*60*1000, // 10 minutes 
    keys: [keys.cookieKey] // we can add multiple keys and it will use one randomly for more security
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// enable dynamic port binding
// if there is any environment variable that is predifined, then use that environment variable as our port
// Otherwise, use 5000!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("we are listening on :" + PORT);
});
