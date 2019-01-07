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

### NOTE:

- Google OAuth API is part of the Google+ API set

# Server code structure - refactor one single index.js to better organized structures

## config:

- protected API keys and settings(not committed to Github)

## routes:

- all route handlers, grouped by purposes

## services:

- helper modules and business logic (e.g. passport configuration that helps handling google authentication)
