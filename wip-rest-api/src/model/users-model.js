const db = require("../database/connection.js");

// Gets username object from the users table
function getUsers() {
    return db.query("SELECT username FROM users").then(res => res.rows[0]);
}

module.exports = {
    getUsers
}