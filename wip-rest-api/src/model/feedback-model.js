const db = require("../database/connection.js");

function getFeedback(stepId) {
  return db
    .query("SELECT * FROM feedback WHERE step_id=($1);", [stepId])
    .then((result) => result.rows);
}

module.exports = {
  getFeedback,
};
