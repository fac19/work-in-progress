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

module.exports = {
  getWatchedProjectsFromDb,
  getUserProjectsFromDb,
};
