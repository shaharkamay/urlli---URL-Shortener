# URLLI URL Shortener

## Table of Contents

- [Deployment](#deployment)
- [Features](#features)
- [How it works](#how-it-works)
  * [How I Shorten URL's](#how-i-shorten)
  * [Analytics](#analytics)
- [Technologies Used](#technologies-used)


## Deployment

The app, both front and back is deployed on [heroku](https://urlli.herokuapp.com)

## Features

- Ability to shorten URL
- Check out analytics such as:
  - Date created
  - Last time clicked
  - Amount of clicks
- Persistence DB
- Responsive, supports small screens aswell
- Frontend bundled with webpack

## How it works

The vision I had for this project was to be able to shorten url's, It had to work well, have a cool analytics page, handle all error cases, be responsive and be persistent.

### How I Shorten

Generate a random and unique `id` based 36 and short it to 4 chars, such as `3g4n`

How do I generate an `id`?

Using the `.toString(36)` fanction I generate a random `id` as follows

```js
const db = new Database('./urls');
let shortUrlId = Math.random().toString(36).substr(2, 4);
while(db.isKeyExists(shortUrlId)) shortUrlId = Math.random().toString(36).substr(2, 4);
```

### Analytics

Analytics are possible because each url created is tracked.  
User creates url -> url is added to database -> user clicks url -> clicks and date added to database  
User requests analytics -> server requests analytics from database -> frontend displays analytics  


## Technologies Used

I used many technologies in this project:

- JS, CSS, HTML - You can't go wrong with these (except for js and css they are kinda bad... and also html)
- [webpack](https://webpack.js.org/) - for bundling my frontend
- [express](https://expressjs.com/) - backend made easy
