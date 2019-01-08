// requiring the original npm passport module here
const passport = require("passport");

// exporting all the routes as a function from this file
// arrow function means that we assume we will call this function with express app object
module.exports = app => {
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

  app.get("/api/logout", (req, res) => { 
    // logout() function is attached by passport
    // then req.user will be detached from req which means user is no longer signed in
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  }); 
};
