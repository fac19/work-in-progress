# Work In Progress

## WIP - Fresh eyes for fresh ideas

A social media platform for creatives to receive feedback on their works in progress.

Weeks 11-13 Student Project

Deployed on [Netlify](https://wip-app.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fdfedb67-dd70-4820-9e62-1c24f12fa5ab/deploy-status)](https://app.netlify.com/sites/wip-app/deploys)

## Co-authoring credits

Co-authored-by: Jack Heriz-Smith <jackherizsmith@gmail.com>
Co-authored-by: CampbellDocherty <campbellsofitsidocherty@gmail.com>
Co-authored-by: Hannah Gooding <hannah.gooding@yahoo.com>
Co-authored-by: Alexreid95 <alexreid95@gmail.com>

## Database set up

![schema](https://i.imgur.com/4S9e6wz.png)

Add the following information into a `.env` file inside the `wip-rest-api/` folder:

```
PGDATABASE=wip_db
PGUSER=user
PGPASSWORD=password
JWT_SECRET=jwtsecret
```

## How to set up development and test databases:

### Set up instructions

1. Type in psql in terminal and hit enter.
   CREATE USER user WITH PASSWORD 'password';
   ALTER USER user WITH SUPERUSER;
2. Initialise the dev and test databases:

```sql
CREATE DATABASE wip_db WITH OWNER user;
CREATE DATABASE wip_test WITH OWNER user; -- database name is important for tests to run
\c wip_db;
\i database/init.sql;
\c wip_test;
\i database/init.sql;
```

3. Ensure the test script in package.json refers to your local test database, i.e.

```json
  "scripts": {
    "test": "PGDATABASE=wip_test jest src/test/*.test.js --watch",
  }
```

4. Run `npm test` to run tests
5. Run `npm run dev` to start development server
6. If you are having issues with anything related to accessing the databases you have created, you may need to grant privileges:
   - `GRANT ALL PRIVILEGES ON DATABASE wip_db TO user;`
   - `GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO user;`

## API routes

REST API deployed on [Heroku](https://wip-rest-api.herokuapp.com/)  
You can make requests to the Heroku App URL, e.g. POST to https://wip-rest-api.herokuapp.com/signup

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/fae4c1f8e60c1e5bf1f1)

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
  "email": "user@example.com",
}
```

#### GET /user
Get your user info when signed in
Send access token as a Bearer Token in the Authorization Header

#### PUT /user
Update your user info
Send access token as a Bearer Token in the Authorization Header

Request body example:
```json
{
  "bio": "I love Comic Sans",
  "vocation": "graphic designer",
}
```

### Projects

#### GET /followedprojects
Get your watched (followed) projects
Send access token as a Bearer Token in the Authorization Header

#### GET /userprojects
Get your own projects
Send access token as a Bearer Token in the Authorization Header

#### POST /userprojects
Add a new project to your account
Send access token as a Bearer Token in the Authorization Header

Request body example:
```json
{
  "project_name": "new project",
  "project_description": "first sketch, feedback welcome"
}
```

### Steps

#### GET /steps/:projectid
Get project steps by project id
Send access token as a Bearer Token in the Authorization Header

#### GET /steps/:projectid
Add project steps by project id
Send access token as a Bearer Token in the Authorization Header

Request body example:
```json
{
  "step_name": "Sketch in pen",
  "step_description": "Adding more details",
  "step_link": "image.jpg"
}
```

### Feedback

#### GET /feedback/:stepid
Get feedback for step by step id
Send access token as a Bearer Token in the Authorization Header

#### POST /feedback/:stepid
Add feedback for step by step id
Send access token as a Bearer Token in the Authorization Header

Request body example:
```json
{
  "feedback_text": "wow, that's amazing!",
  "feedback_tag": "compliment"
}
```

#### PUT /feedback/:feedbackid
Update feedback by feedback id
Send access token as a Bearer Token in the Authorization Header

Request body example:
```json
{
  "feedback_text": "wow, that's really amazing - keep up the good work!",
  "feedback_tag": "compliment"
}
```

### Watching

#### POST /watching/:projectid
Start watching (following) a post by project id
Send access token as a Bearer Token in the Authorization Header

#### DELETE /watching/:projectid
Stop watching (following) a post by project id
Send access token as a Bearer Token in the Authorization Header
