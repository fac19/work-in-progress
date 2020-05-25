const db = require("../database/connection.js");

function getWatchedProjectsFromDb(userId) {
  return db
    .query(
      "SELECT * FROM projects JOIN user_watch ON projects.id=user_watch.project_id WHERE user_watch.user_id=($1);",
      [userId]
    )
    .then((result) => result.rows);
}

function getUserProjectsFromDb(userId) {
  return db
    .query("SELECT * FROM projects where user_id=($1);", [userId])
    .then((result) => result.rows);
}

function addNewProjectToDb(user_id, { project_name, project_description }) {
  return db
    .query(
      "INSERT INTO projects (user_id, project_name, project_description, project_status) VALUES (($1), ($2), ($3), ($4)) RETURNING *",
      [user_id, project_name, project_description, "false"]
    )
    .then((result) => result.rows[0]);
}

module.exports = {
  getWatchedProjectsFromDb,
  getUserProjectsFromDb,
  addNewProjectToDb,
};
