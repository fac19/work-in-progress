const model = require("../model/watching-model");

function addRelation(req, res, next) {
  const userId = req.user.id;
  const projectId = req.params.projectId;

  model
    .addToWatching(userId, projectId)
    .then((project) => res.status(201).send(project))
    .catch(next);
}

function removeRelation(req, res, next) {
  const userId = req.user.id;
  const projectId = req.params.projectId;

  model
    .removeFromWatching(userId, projectId)
    .then((project) => {
      res.status(200).send(project);
    })
    .catch(next);
}

module.exports = { addRelation, removeRelation };
