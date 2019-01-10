// prod.js - production keys here
module.exports = {
  //client ID for google
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //facebook is coming soon

  // mongodb atlas config
  mongoURI: process.env.MONGO_URI,
  // cookie key
  cookieKey: process.env.COOKIE_KEY,
  callBackURL: "https://glacial-lowlands-82279.herokuapp.com/auth/google/callback"
};
