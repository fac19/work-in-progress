const db = require("../database/connection.js");

function getStepsWithProjectId(projectId) {
  return db
    .query("SELECT * FROM steps WHERE project_id=($1);", [projectId])
    .then((result) => result.rows);
}

module.exports = {
  getStepsWithProjectId,
};
