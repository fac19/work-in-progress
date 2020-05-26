const model = require("../model/steps-model");

function getProjectSteps(req, res, next) {
  const projectId = req.params.projectId;
  model
    .getStepsWithProjectId(projectId)
    .then((steps) => res.send(steps))
    .catch(next);
}

function addNewStep(req, res, next) {
  const projectId = req.params.projectId;
  const step = req.body;
  // check user is owner of project!
  model
    .addStepWithProjectId(projectId, step)
    .then((stepInfo) => res.status(201).send(stepInfo))
    .catch(next);
}

// function post(req, res, next) {

// }

module.exports = { getProjectSteps, addNewStep };
