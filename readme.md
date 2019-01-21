# Server side: Using Google OAuth to handle user's account issue

### Library components included:

- passport
  - general helpers for handling auth in express app
- passport strategy
  - helpers for authenticating with one very specific method (email/password, Google, Facebook, etc)
  - at least one passport stretegy for 1 specific stretegies (1 for google, 1 for facebook, etc...)
  - `http://www.passportjs.org/`
- axios library: helping us to make api request/ AJAX
- redux-thunk: make asynchronous action creators behave the way we want

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

## in dev mode, I am using a proxy which forward requests made to localhost:3000 to localhost:5000 (where API runs), this way, I don't need to worry about cookie issue (by browser default, cookies are included if I make request to same origin. So we don't need to manually include the cookies)

## in prod mode, since client is inside server, all the requests will be going to same address. So we don't need to worry about cookie at all. No cross origin issues.

## also, by using proxy, I don't need to worried about CORS(corss origin resource sharing)

# ES2017 Async/Await Syntax

## old syntax

```
function fetchAPI() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAPI();
```

## new syntax

```
async function fetchAPI() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();

  console.log(json);
}

fetchAPI();
```

## after using arrow function
```
const fetchAPI = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();

  console.log(json);
}

fetchAPI();
```

# React, Redux, and React-Redux
-   redux: a library that holds all the states (data)
-   redux store: all our states resides
    -   to determine or change the current state, we call an action creator which dispatch an action.
    -   the action is sent to all different reducers inside our application
        -   the purpose of an action creator is to return an action that gets sent to all the differnt reducers
    -   reducers are combined together with the combinedReducers' call to update the state in redux store
- redux-thunk: allow us to manually dispactch an event
-   An react component will call an action creator that will return an action which will be sent to all different reducers and then update all the states inside redux store. 
-   After updating the states inside our store, the states will be sent back to the react compoenents to render/display possible new contents on the screen
  
## Behind the scene
-   inside our index.js file: we create redux store and we render a provider tag 
-   the provider tag is a react component that is provided to us by the react-redux library (this library makes sure that react and redux works together nicely)
-   since this provider tag is at the very top level of our application, other components can easily pull information from this provider(that is our store )