const db = require("../database/connection.js");

// Gets username object from the users table
// function getUsers() {
//   return db.query("SELECT username FROM users").then((res) => res.rows[0])
// }

// Adds a user to the database => used in sign-up
function addUser({ username, email, bio, vocation, password }) {
  return db
    .query(
      "INSERT INTO users(username, email, password, user_bio, user_vocation) VALUES (($1), ($2), ($3), ($4), ($5)) RETURNING *",
      [username, email, password, bio, vocation]
    )
    .then((result) => result.rows[0]);
}

// Gets a user by their username
function getUserByName(username) {
  return db
    .query("SELECT * FROM users WHERE username = ($1)", [username])
    .then((result) => result.rows[0]);
}

// Gets a user by their id
function getUserById(userId) {
  return db
    .query("SELECT * FROM users WHERE id = ($1)", [userId])
    .then((result) => result.rows[0]);
}

// Updates a user by their id
function updateUser(userId, newUserData) {
  const values = [
    newUserData.username,
    newUserData.email,
    newUserData.password,
    newUserData.bio,
    newUserData.vocation,
    userId,
  ];
  return db
    .query(
      "UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email),  password = COALESCE($3, password), user_bio = COALESCE($4, user_bio), user_vocation = COALESCE($5, user_vocation) WHERE id =($6) RETURNING *",
      values
    )
    .then((result) => result.rows[0]);
}

// function deleteUser(userId) {
//   return db.query("DELETE FROM users WHERE id=($1)", [userId]);
// }

module.exports = {
  //   getUsers,
  addUser,
  getUserByName,
  getUserById,
  updateUser,
  // deleteUser,
};
