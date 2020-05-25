const model = require("../model/feedback-model");

function get(req, res, next) {
  const stepId = req.params.stepId;
  model
    .getFeedback(stepId)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

// function post(req, res, next) {

// }

module.exports = { get };
