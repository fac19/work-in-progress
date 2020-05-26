const express = require("express");
const cors = require("cors");
// const getUser = require("./middleware/getUser");
const logger = require("./middleware/logger");
const authorise = require("./middleware/authorise");
const handleErrors = require("./middleware/error");
const users = require("./handlers/users");
const feedback = require("./handlers/feedback");
const project = require("./handlers/projects");
const watching = require("./handlers/watching");
const steps = require("./handlers/steps");

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.urlencoded({ extended: false }));
// server.use(getUser);
server.use(cors());
server.use(logger);
server.use(express.json()); //so that express knows to use JSON

//Routes for users
server.get("/user", authorise, users.get);
server.post("/logIn", users.logIn);
server.post("/signUp", users.signUp);
server.put("/user", authorise, users.update);
// server.delete("/user/:username", authorise, users.delete);

//Routes for projects
server.get("/followedProjects", authorise, project.getWatchedProjects);
server.get("/userProjects", authorise, project.getUserProjects);
server.get("/exploreProjects", authorise, project.getExploreProjects);
server.post("/newProject", authorise, project.addNewProject);
// server.put('/project/:projectId', authorise, project.put)
// server.delete('/project/:projectId', authorise, project.delete)

//Routes for steps
server.get("/steps/:projectId", authorise, steps.getProjectSteps);
server.post("/steps/:projectId", authorise, steps.addNewStep);
// server.put('/step/:projectId/:stepId', authorise, step.put)
// server.delete('/step/:projectId/:stepId', authorise, step.delete)

//Routes for feedback
server.get("/feedback/:stepId", authorise, feedback.get);
server.post("/feedback/:stepId", authorise, feedback.add);
server.put("/feedback/:feedbackId", authorise, feedback.update);
// server.delete('/feedback/:feedbackId', auth, feedback.delete)

//Routes for user watch
server.post("/watching/:projectId", authorise, watching.addRelation);
server.delete("/watching/:projectId", authorise, watching.removeRelation);

//Error handler
server.use(handleErrors);
