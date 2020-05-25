const model = require("../model/feedback-model");

function get(req, res, next) {
  const stepId = req.params.stepId;
  model
    .getFeedback(stepId)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

function post(req, res, next) {
  const userId = req.user.id;
  const stepId = req.params.stepId;
  const feedback_text = req.body.feedback;
  const feedback_tag = req.body.tag;

  console.log(feedback_text);

  model
    .addFeedback(userId, stepId, feedback_text, feedback_tag)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

module.exports = { get, post };
