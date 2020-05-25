const db = require("../database/connection.js");

// function getMultipleBooksById(ids) {
//   const sqlVariableList = ids.map((id, index) => {
//     return `$${index + 1}`;
//   });
//   return db
//     .query(`SELECT title FROM books WHERE id IN (${sqlVariableList});`, ids)
//     .then((res) => res.rows);
// }


// SELECT * FROM projects WHERE id IN (${list}), [ids])

function getWatchedProjects(userId) {
  return db
    .query("SELECT project_id FROM user_watch WHERE user_id=($1);", [userId])
      .then((projectIdObjs) => {
          const projectIds = projectIdObjs.rows.map(projectIdObj => parseInt(projectIdObj.project_id))
          console.log(projectIds)
          return db.query("SELECT * FROM projects WHERE id IN ($1, $2, $3, $4)", projectIds)
      }).then(result => result.rows);
}

module.exports = {
  getWatchedProjects,
};
