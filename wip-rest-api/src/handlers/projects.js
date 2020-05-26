const model = require("../model/projects-model");

function getWatchedProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getWatchedProjectsFromDb(userId)
    .then((projects) => res.send(projects))
    .catch(next);
}

function getUserProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getUserProjectsFromDb(userId)
    .then((projects) => res.send(projects))
    .catch(next);
}

function getExploreProjects(req, res, next) {
  const userId = req.user.id;
  model
    .getWatchedProjectsFromDb(userId)
    .then((watchedProjects) => {
      model
        .getAllProjectsFromDb()
        .then((allProjects) => {
          const watchedIds = watchedProjects.map(
            (watchedProject) => watchedProject.id
          );
          // filter all the projects where the project IDs are not watched or belonging to a user
          const exploreProjects = allProjects.filter(
            (project) =>
              watchedIds.indexOf(project.id) === -1 && userId != project.user_id
          );
          res.send(exploreProjects);
        })
        .catch(next);
    })
    .catch(next);
}

function addNewProject(req, res, next) {
  const userId = req.user.id;
  model
    .addNewProjectToDb(userId, req.body)
    .then((project) => res.status(201).send(project))
    .catch(next);
}

module.exports = {
  getWatchedProjects,
  getUserProjects,
  addNewProject,
  getExploreProjects,
};
