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
