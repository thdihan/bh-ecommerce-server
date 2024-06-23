# Car Wash Booking System - Backend

-   About: This is a backend part of a Car Washing Booking system
-   Language and Frameworks: Typescript + Express JS

## How to install and Run?

At first clone/download the repo. Then make a `.env` file with these values

```js
NODE_ENV = development
PORT = 5001
DATABASE_URL =
BBCRYPT_SALT_ROUNDS =
DEFAULT_PASS=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
```

Then run this code to install all node packages `npm i`. If everything is ok then you are ready to run.
Just run this command `npm start:dev` to run in development mode or if you want production mode then build first then run with these command :

```js
npm run build
npm run start:prod
```
