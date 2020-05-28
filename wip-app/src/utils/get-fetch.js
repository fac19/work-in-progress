async function getFetch({ endpoint, error }) {
  const authToken = localStorage.getItem("auth");

  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/JSON",
      Authorization: authToken,
    },
  };

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${error}, status: ${res.status}`);
      }
      return res.json();
    })
    .catch(console.error);
}

function feedPage() {
  const options = {
    endpoint: "followedprojects",
    errorMessage: "Feed error",
  };
  return getFetch(options);
}

function getUser(token) {
  const options = {
    endpoint: "user",
    error: "Unable to get this page",
  };
  return getFetch(options).then((res) => {
    return res;
  });
}

function explorePage() {
  const options = {
    endpoint: "exploreprojects",
    errorMessage: "Feed error",
  };
  return getFetch(options);
}

function getUserPageProjects() {
  const options = {
    endpoint: "userprojects",
    errorMessage: "Project feed error",
  };
  return getFetch(options);
}

function getProjectPage(projectid) {
  const options = {
    endpoint: `project/${projectid}`,
    errorMessage: "Project page error",
  };
  return getFetch(options);
}

function getSteps(projectid) {
  const options = {
    endpoint: `steps/${projectid}`,
    errorMessage: "Project steps error",
  };
  return getFetch(options);
}

export {
  feedPage,
  getUser,
  explorePage,
  getUserPageProjects,
  getProjectPage,
  getSteps,
};
