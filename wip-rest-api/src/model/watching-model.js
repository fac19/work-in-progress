const db = require("../database/connection.js");

function addToWatching(userId, projectId) {
  return db
    .query(
      "INSERT INTO user_watch(user_id, project_id) VALUES (($1),($2)) RETURNING *;",
      [userId, projectId]
    )
    .then((relationship) => relationship.rows[0]);
}

function removeFromWatching(userId, projectId) {
  return db
    .query(
      "DELETE FROM user_watch WHERE user_id=($1) AND project_id=($2) RETURNING *;",
      [userId, projectId]
    )
    .then((relationship) => relationship.rows[0]);
}

module.exports = {
  addToWatching,
  removeFromWatching,
};
