const db = require("../database/connection.js")

// Gets username object from the users table
function getUsers() {
  return db.query("SELECT username FROM users").then((res) => res.rows[0])
}

// Adds a user to the database => used in sign-up
function addUser({ username, email, bio, vocation, password }) {
  return db
    .query(
      "INSERT INTO users(username, email, password, user_bio, user_vocation) VALUES (($1), ($2), ($3), ($4), ($5)) RETURNING *",
      [username, email, password, bio, vocation]
    )
    .then((result) => result.rows[0])
}

// Gets a user by their username
function getUserByName(username) {
  return db
    .query("SELECT * FROM users WHERE username = ($1)", [username])
    .then((result) => result.rows[0])
}

// Gets a user by their id
function getUserById(userId) {
  return db
    .query("SELECT * FROM users WHERE id = ($1)", [userId])
    .then((result) => result.rows[0])
}

module.exports = {
  getUsers,
  addUser,
  getUserByName,
  getUserById,
}
