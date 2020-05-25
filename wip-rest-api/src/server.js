const express = require("express");
// const getUser = require("./middleware/getUser");
const logger = require("./middleware/logger");
const authorise = require("./middleware/authorise");
const handleErrors = require("./middleware/error");
const users = require("./handlers/users");
const feedback = require("./handlers/feedback");
const project = require("./handlers/projects");

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.urlencoded({ extended: false }));
// server.use(getUser);
server.use(logger);
server.use(express.json()); //so that express knows to use JSON

//Routes for users
server.get("/user", authorise, users.get);
server.post("/logIn", users.postLogIn);
server.post("/signUp", users.postSignUp);
server.put("/user", authorise, users.put);
// server.delete("/user/:username", authorise, users.delete);

//Routes for projects
server.get("/followedProjects", authorise, project.getWatchedProjects);
server.get("/userProjects", authorise, project.getUserProjects);
server.get("/exploreProjects", authorise, project.getExploreProjects);
server.post("/newProject", authorise, project.addNewProject);
// server.put('/project/:projectId', authorise, project.put)
// server.delete('/project/:projectId', authorise, project.delete)

//Routes for steps
// server.get('/step/:projectId/:stepId', authorise, step.get)
// server.post('step/:projectId', step.post)
// server.put('/step/:projectId/:stepId', authorise, step.put)
// server.delete('/step/:projectId/:stepId', authorise, step.delete)

//Routes for feedback
server.get("/feedback/:stepId", authorise, feedback.get);
// server.post('feedback/:stepId', authorise, feedback.post)
// server.put('/feedback/:feedbackId', authorise, feedback.put)
// server.delete('/feedback/:feedbackId', authorise, feedback.delete)

//Error handler
server.use(handleErrors);
