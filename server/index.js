const express = require("express");
const mongoose = require("mongoose");
// require passport.js file to make use of it in this project, since we are not returning anything ==> we don't need to assign it to a const var
require("./services/passport");
// require mongoose
require('./models/User');
const keys = require("./config/key");

// connect our remote mongoDB Atlas
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
// require that function we exported from authRoutes.js so that we can call that function
// a better way to do this is: require('./routes/authRoutes')(app) and put this after where we declare app, but it doesn't look user friendly to me
const authRoutes = require("./routes/authRoutes");

const app = express();

authRoutes(app);

// enable dynamic port binding
// if there is any environment variable that is predifined, then use that environment variable as our port
// Otherwise, use 5000!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("we are listening on :" + PORT);
});
