const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// app.get('/', (req, res) => {
//     res.send({bye: 'buddy'});
// });

passport.use(new GoogleStrategy());

// enable dynamic port binding
// if there is any environment variable that is predifined, then use that environment variable as our port
// Otherwise, use 5000!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("we are listening on :" + PORT);
});