const model = require("../model/feedback-model");

function get(req, res, next) {
  const stepId = req.params.stepId;
  model
    .getFeedback(stepId)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

function add(req, res, next) {
  const userId = req.user.id;
  const stepId = req.params.stepId;
  const feedback_text = req.body.feedback;
  const feedback_tag = req.body.tag;

  model
    .addFeedback(userId, stepId, feedback_text, feedback_tag)
    .then((feedback) => res.status(201).send(feedback))
    .catch(next);
}

function update(req, res, next) {
  const userId = req.user.id;
  const feedbackId = req.params.feedbackId;
  const feedback_text = req.body.feedback;
  const feedback_tag = req.body.tag;

  model
    .getUserIdByFeedbackId(feedbackId)
    .then((feedback) => {
      if (feedback.user_id === userId) {
        model
          .updateFeedback(feedbackId, feedback_text, feedback_tag)
          .then((feedback) => res.status(201).send(feedback));
        // .catch(next);
      } else {
        res
          .status(404)
          .send(
            "Unauthorised: you do not have permission to edit this comment"
          );
      }
    })
    .catch(next);
}

module.exports = { get, add, update };
