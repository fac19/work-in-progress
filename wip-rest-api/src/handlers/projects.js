const model = require("../model/projects-model");

function getWatchedProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getWatchedProjectsFromDb(userId)
    .then((result) => res.send(result))
    .catch(next);
}

module.exports = { getWatchedProjects };
