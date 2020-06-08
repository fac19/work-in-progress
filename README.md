# Work In Progress

## WIP - Fresh eyes for fresh ideas

A social media platform for creatives to receive feedback on their works in progress.

Weeks 11-13 Student Project

Deployed on [Netlify](https://wip-app.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fdfedb67-dd70-4820-9e62-1c24f12fa5ab/deploy-status)](https://app.netlify.com/sites/wip-app/deploys)
[![Build Status](https://travis-ci.org/fac19/work-in-progress.svg?branch=master)](https://travis-ci.org/fac19/work-in-progress)

## In this README

1. [Database set up](#database-set-up)
2. [Scripts](#scripts) [![codecov](https://codecov.io/gh/fac19/work-in-progress/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/work-in-progress)
3. [API routes](#api-routes) [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b12cad151e94635d9f95)

## Credits

Logo designed by Jessica Gooding

## The team

### [Kat](https://github.com/Alexreid95) - _Scrum Master_

### [Campbell](https://github.com/CampbellDocherty) - _UX/UI lead_

### [Hannah](https://github.com/hannahgooding) - _DevOps lead_

### [Jack](https://github.com/jackherizsmith) - _QA lead_

## Technologies Used:

- React
- Node
- Express
- PostgreSQL
- Jest
- Husky
- Codecov
- ES Lint
- Prettier

## Prototype:

First draft protoyped in [Figma](https://www.figma.com/file/Ck7h1KHhwccjF7YgcB8fe7/Work-In-Progress?node-id=0%3A1) for user testing

---

# Working with our project

## Database set up

![schema](https://i.imgur.com/4S9e6wz.png)

Add the following information into a `.env` file inside the `wip-rest-api/` folder:

```
PGDATABASE=wip_db
PGUSER=user
PGPASSWORD=password
JWT_SECRET=jwtsecret
```

### How to set up development and test databases:

#### Set up instructions

1. `git clone` this repo
2. cd into wip-app directory and `npm install`
3. Type in psql in terminal and hit enter.

```sql
CREATE USER user WITH PASSWORD 'password';
ALTER USER user WITH SUPERUSER;
```

Initialise the dev and test databases:

```sql
CREATE DATABASE wip_db WITH OWNER user;
CREATE DATABASE wip_test WITH OWNER user; -- database name is important for tests to run
\c wip_db;
\i database/init.sql;
\c wip_test;
\i database/init.sql;
```

4. Ensure the test script in package.json refers to your local test database, i.e.

```json
  "scripts": {
    "test": "PGDATABASE=wip_test jest src/test/*.test.js --watch"
  }
```

5. Run `npm test` to run tests inside wip-rest-api directory
6. Run `npm run dev` to start development server
7. If you are having issues with anything related to accessing the databases you have created, you may need to assign your user again:
   - `ALTER DATABASE wip_db OWNER TO user;`

## Scripts

You can set everything up using CLI from the project root.

`npm run i-all` => installs everything you need

`npm run app` => runs the front end on localhost:3001

`npm run api` => runs the back end on localhost:3000 (once you've set up your database)

### Tests

Jest is used for all testing.

`npm test` => run tests for whole project; press q once you're happy with each review

`npm run app-test` => test just the front end

`npm run api-test` => test just the back end

## API routes

REST API deployed on [Heroku](https://wip-rest-api.herokuapp.com/)  
You can make requests to the Heroku App URL, e.g. `POST` to `https://wip-rest-api.herokuapp.com/signup`

:closed_lock_with_key: = Authorization required

### Users

#### POST /signup

Creates access token

Request body example:

```json
{
  "username": "username",
  "email": "user@example.com",
  "bio": "graphic design is my passion",
  "vocation": "graphic designer",
  "password": "password"
}
```

#### POST /login

Receive access token

Request body example:

```json
{
  "username": "username",
  "email": "user@example.com"
}
```

#### GET /user :closed_lock_with_key:

Get your user info when signed in

#### PUT /user :closed_lock_with_key:

Update your user info

Request body example:

```json
{
  "bio": "I love Comic Sans",
  "vocation": "graphic designer"
}
```

### Projects

#### GET /project/:projectid :closed_lock_with_key:

Get a project by project id

#### GET /followedprojects :closed_lock_with_key:

Get your watched (followed) projects

#### GET /userprojects :closed_lock_with_key:

Get your own projects

#### GET /exploreprojects :closed_lock_with_key:

Get your unwatched (unfollowed) projects

#### POST /newproject :closed_lock_with_key:

Add a new project to your account

Request body example:

```json
{
  "project_name": "new project",
  "project_description": "first sketch, feedback welcome"
}
```

### Steps

#### GET /steps/:projectid :closed_lock_with_key:

Get project steps by project id

#### POST /steps/:projectid :closed_lock_with_key:

Add project steps by project id

Request body example:

```json
{
  "step_name": "Sketch in pen",
  "step_description": "Adding more details",
  "step_link": "image.jpg"
}
```

### Feedback

#### GET /feedback/:stepid :closed_lock_with_key:

Get feedback for step by step id

#### POST /feedback/:stepid :closed_lock_with_key:

Add feedback for step by step id

Request body example:

```json
{
  "feedback": "wow, that's amazing!",
  "tag": "compliment"
}
```

#### PUT /feedback/:feedbackid :closed_lock_with_key:

Update feedback by feedback id

Request body example:

```json
{
  "feedback": "wow, that's really amazing - keep up the good work!",
  "tag": "compliment"
}
```

### Watching

#### POST /watching/:projectid :closed_lock_with_key:

Start watching (following) a post by project id

#### DELETE /watching/:projectid :closed_lock_with_key:

Stop watching (following) a post by project id

---

Co-authored-by: Alexreid95 <alexreid95@gmail.com>
Co-authored-by: Hannah Gooding <hannah.gooding@yahoo.com>
Co-authored-by: CampbellDocherty <campbellsofitsidocherty@gmail.com>
Co-authored-by: Jack Heriz-Smith <jackherizsmith@gmail.com>
