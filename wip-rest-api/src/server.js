const express = require("express");
// const auth = require("../middleware/auth");
// const error = require("../middleware/error");
const logger = require('./middleware/logger');
const users = require('./handlers/users')
const auth = require('./middleware/authorise')
const handleErrors = require('./middleware/error')
const getUser = require('./middleware/getUser')

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.urlencoded({extended : false}));
server.use(getUser);
server.use(logger);
server.use(express.json()); //so that express knows to use JSON

//Routes for users
// server.get('/user/:username', auth, users.get)
server.post('/logIn', users.postLogIn)
server.post('/signUp', users.postSignUp)
// server.put('/user/:username', auth, users.put)
// server.delete('/user/:username', auth, users.delete)


//Routes for projects
// server.get('/project/:projectId', auth, project.get)
// server.post('project', auth, project.post)
// server.put('/project/:projectId', auth, project.put)
// server.delete('/project/:projectId', auth, project.delete)


//Routes for steps
// server.get('/step/:projectId/:stepId', auth, step.get)
// server.post('step/:projectId', step.post)
// server.put('/step/:projectId/:stepId', auth, step.put)
// server.delete('/step/:projectId/:stepId', auth, step.delete)


//Routes for comments
// server.get('/comments/:stepId', auth, comments.get)
// server.post('comments/:stepId', auth, comments.post)
// server.put('/comments/:commentId', auth, comments.put)
// server.delete('/comments/:commentId', auth, comments.delete)


//Error handler
server.use(handleErrors);