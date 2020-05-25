const express = require("express");
// const getUser = require("./middleware/getUser");
const logger = require("./middleware/logger");
const checkAuth = require("./middleware/authorise");
const handleErrors = require("./middleware/error");
const users = require("./handlers/users");
const feedback = require("./handlers/feedback");
// const project = require("./handlers/projects");

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.urlencoded({ extended: false }));
// server.use(getUser);
server.use(logger);
server.use(express.json()); //so that express knows to use JSON

//Routes for users
server.get("/user", checkAuth, users.get);
server.post("/logIn", users.postLogIn);
server.post("/signUp", users.postSignUp);
server.put("/user", checkAuth, users.put);
// server.delete("/user/:username", checkAuth, users.delete);

//Routes for projects
// server.get("/project/:projectId", checkAuth, project.get);
// server.post('project', auth, project.post)
// server.put('/project/:projectId', auth, project.put)
// server.delete('/project/:projectId', auth, project.delete)

//Routes for steps
// server.get('/step/:projectId/:stepId', auth, step.get)
// server.post('step/:projectId', step.post)
// server.put('/step/:projectId/:stepId', auth, step.put)
// server.delete('/step/:projectId/:stepId', auth, step.delete)

//Routes for feedback
server.get("/feedback/:stepId", checkAuth, feedback.get);
// server.post('feedback/:stepId', checkAuth, feedback.post)
// server.put('/feedback/:feedbackId', auth, feedback.put)
// server.delete('/feedback/:feedbackId', auth, feedback.delete)

//Error handler
server.use(handleErrors);
