const db = require("../database/connection.js");

function getFeedback(stepId) {
  return db
    .query("SELECT * FROM feedback WHERE step_id=($1);", [stepId])
    .then((result) => result.rows);
}

function addFeedback(userId, stepId, feedback_text, feedback_tag) {
  return db
    .query(
      "INSERT INTO feedback(user_id, step_id, feedback_text, feedback_tag) VALUES($1, $2, $3, $4) RETURNING *",
      [userId, stepId, feedback_text, feedback_tag]
    )
    .then((result) => {
      return result.rows[0];
    });
}

function updateFeedback(userId, feedbackId, feedback_text, feedback_tag) {
  return db
    .query(
      "UPDATE feedback SET feedback_text = COALESCE($1, feedback_text), feedback_tag = COALESCE($2, feedback_tag) WHERE id=($3) RETURNING *",
      [feedback_text, feedback_tag, feedbackId]
    )
    .then((result) => result.rows[0]);
}

module.exports = {
  getFeedback,
  addFeedback,
  updateFeedback,
};
