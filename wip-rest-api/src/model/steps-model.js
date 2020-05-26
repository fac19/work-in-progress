const db = require("../database/connection.js");

function getStepsWithProjectId(projectId) {
  return db
    .query("SELECT * FROM steps WHERE project_id=($1);", [projectId])
    .then((steps) => steps.rows);
}

function addStepWithProjectId(
  projectId,
  { step_name, step_description, step_link }
) {
  return db
    .query(
      "INSERT INTO steps (project_id, step_name, step_description, step_link) VALUES (($1), ($2), ($3), ($4)) RETURNING *;",
      [projectId, step_name, step_description, step_link]
    )
    .then((step) => step.rows[0]);
}

module.exports = {
  getStepsWithProjectId,
  addStepWithProjectId,
};
