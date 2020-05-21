const model = require("../model/feedback-model");
require("dotenv").config();

function get(req, res, next) {
  const stepId = req.params.stepId;
  model
    .getFeedback(stepId)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

module.exports = { get };
