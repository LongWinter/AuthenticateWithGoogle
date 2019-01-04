# Server side: Using Google OAuth to handle user's account issue

### Library components included:
-   passport
    -   general helpers for handling auth in express app
-   passport strategy
    -   helpers for authenticating with one very specific method (email/password, Google, Facebook, etc)
    -   at least one passport stretegy for 1 specific stretegies (1 for google, 1 for facebook, etc...)

``` http://www.passportjs.org/ ```

### NOTE:
-   Google OAuth API is part of the Google+ API set

# Server code structure - refactor one single index.js to better organized structures

## config: 
- protected API keys and settings(not committed to Github)
## routes:
- all route handlers, grouped by purposes
## services:
- helper modules and business logic (e.g. passport configuration that helps handling google authentication)