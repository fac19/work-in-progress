const model = require("../model/watching-model");

function post(req, res, next) {
  const userId = req.user.id;
  const projectId = req.params.projectId;

  model
    .addToWatching(userId, projectId)
    .then((project) => res.status(201).send(project))
    .catch(next);
}

function remove(req, res, next) {
  const userId = req.user.id;
  const projectId = req.params.projectId;

  model
    .removeFromWatching(userId, projectId)
    .then((project) => {
      console.log("HEY", project);
      res.status(200).send(project);
    })
    .catch(next);
}

module.exports = { post, remove };
