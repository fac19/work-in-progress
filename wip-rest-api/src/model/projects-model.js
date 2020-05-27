const db = require("../database/connection.js");

function getWatchedProjectsFromDb(userId) {
  return db
    .query(
      "SELECT (SELECT username FROM users WHERE users.id=projects.user_id), projects.id, project_name, steps.date, step_link FROM projects JOIN user_watch ON project_id=projects.id JOIN users ON user_watch.user_id=users.id JOIN steps ON projects.id=steps.project_id WHERE user_watch.user_id=($1);",
      [userId]
    )
    .then((projects) => projects.rows);
}

function getUserProjectsFromDb(userId) {
  return db
    .query("SELECT * FROM projects where user_id=($1);", [userId])
    .then((projects) => projects.rows);
}

function getAllProjectsFromDb() {
  return db.query("SELECT * FROM projects").then((projects) => projects.rows);
}

function addNewProjectToDb(user_id, { project_name, project_description }) {
  return db
    .query(
      "INSERT INTO projects (user_id, project_name, project_description, project_status) VALUES (($1), ($2), ($3), ($4)) RETURNING *;",
      [user_id, project_name, project_description, "false"]
    )
    .then((project) => project.rows[0]);
}

module.exports = {
  getWatchedProjectsFromDb,
  getUserProjectsFromDb,
  addNewProjectToDb,
  getAllProjectsFromDb,
};
