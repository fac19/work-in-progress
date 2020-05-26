const model = require("../model/projects-model");

function getWatchedProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getWatchedProjectsFromDb(userId)
    .then((result) => res.send(result))
    .catch(next);
}

function getUserProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getUserProjectsFromDb(userId)
    .then((result) => res.send(result))
    .catch(next);
}

function getExploreProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getWatchedProjectsFromDb(userId)
    .then((watchedProjects) => {
      model.getAllProjectsFromDb().then((allProjects) => {
        const watchedIds = watchedProjects.map(
          (watchedProject) => watchedProject.id
        );
        const exploreProjects = allProjects.filter(
          (project) =>
            watchedIds.indexOf(project.id) === -1 && userId != project.user_id
        );
        res.send(exploreProjects);
      });
    })
    .catch(next);
}

function addNewProject(req, res, next) {
  const userId = req.user.id;
  model
    .addNewProjectToDb(userId, req.body)
    .then((result) => res.status(201).send(result))
    .catch(next);
}

module.exports = {
  getWatchedProjects,
  getUserProjects,
  addNewProject,
  getExploreProjects,
};
