# Server side: Using Google OAuth to handle user's account issue

### Library components included:

- passport
  - general helpers for handling auth in express app
- passport strategy
  - helpers for authenticating with one very specific method (email/password, Google, Facebook, etc)
  - at least one passport stretegy for 1 specific stretegies (1 for google, 1 for facebook, etc...)

`http://www.passportjs.org/`

### MongoDB and Mongoose:

- MongoDB stores JSON objects that are collection based
- Mongoose is a JavaScript library that maps Mongoose model class into a entrie MongoDB collection (model <==> collection)
- An entry in a mongo collection will be mapped from Mongoose model instance (model instance <==> entry in a collection)
- A model class has a bunch of functions that designed to work with an entire collection (create new records, searching records)
- Model instances are all javascript objects that represents single records in a mongo collection
- In practice, we use one class to represent one collection of mongoDB.
- when we need to use our mongoose model inside other files, we normally do it by requiring it again, but this may create error in testing environment, so we need to treat them specially.

### Promise:

- a promise is a tool that is used to handle JavaScript Asynchronous code.

### Cookies:

- add cookie-session pakage using npm
- there are 2 different approaches to use cookies:
  - cookie-session: the cookie contains all the information, here, we store id (4KB maximum )
  - express-session: the cookie contains a reference to a session (stored in a remote database), so we can store a large amount of data
- in this application, cookie-session makes sense because all we care is user's id

### Middleware:

- `app.use()`
- middleswares are small functions that are used to modify incoming requests to our app before they are sent out to route handlers

### NOTE:

- Google OAuth API is part of the Google+ API set

# Server code structure - refactor one single index.js to better organized structures

## config:

- protected API keys and settings(not committed to Github)
- further divided into two set of keys:
  - one for dev environment 
  - one for prod environment
- keys.js will have some logic to tell which environment are you in
  - if prod, then use env variables
  - if dev, then use config/dev.js ==> this won't be committed

## routes:

- all route handlers, grouped by purposes

## services:

- helper modules and business logic (e.g. passport configuration that helps handling google authentication)

## models:

- contains mongoose models that represents a mongoDB collection

# Dev vs. Prod
