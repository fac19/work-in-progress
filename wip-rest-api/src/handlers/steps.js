const model = require("../model/steps-model");

function getProjectSteps(req, res, next) {
  const projectId = req.params.projectId;
  model
    .getStepsWithProjectId(projectId)
    .then((steps) => res.send(steps))
    .catch(next);
}

// function post(req, res, next) {

// }

module.exports = { getProjectSteps };
