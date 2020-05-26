const db = require("../database/connection.js");

function getFeedback(stepId) {
  return db
    .query("SELECT * FROM feedback WHERE step_id=($1);", [stepId])
    .then((feedback) => feedback.rows);
}

// Gets a user by their feedbackId
function getUserIdByFeedbackId(feedbackId) {
  return db
    .query("SELECT user_id FROM feedback WHERE id = ($1)", [feedbackId])
    .then((userId) => userId.rows[0]);
}

function addFeedback(userId, stepId, feedback_text, feedback_tag) {
  return db
    .query(
      "INSERT INTO feedback(user_id, step_id, feedback_text, feedback_tag) VALUES($1, $2, $3, $4) RETURNING *;",
      [userId, stepId, feedback_text, feedback_tag]
    )
    .then((feedback) => {
      return feedback.rows[0];
    });
}

function updateFeedback(feedbackId, feedback_text, feedback_tag) {
  return db
    .query(
      "UPDATE feedback SET feedback_text = COALESCE($1, feedback_text), feedback_tag = COALESCE($2, feedback_tag) WHERE id=($3) RETURNING *;",
      [feedback_text, feedback_tag, feedbackId]
    )
    .then((feedback) => feedback.rows[0]);
}

module.exports = {
  getFeedback,
  getUserIdByFeedbackId,
  addFeedback,
  updateFeedback,
};
