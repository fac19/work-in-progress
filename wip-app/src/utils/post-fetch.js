async function postFetch({ endpoint, body, error }) {
  const authToken = localStorage.getItem("auth");
  let headersObject = authToken
    ? {
        "content-type": "application/json",
        Authorization: authToken,
      }
    : {
        "content-type": "application/json",
      };

  const fetchObject = {
    method: "POST",
    headers: headersObject,
    body: JSON.stringify(body),
  };

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${error}, status: ${res.status}`);
      } else {
        return res.json();
      }
    })
    .catch(console.error);
}

function signUpPost(signUpFormData) {
  const options = {
    endpoint: "signup",
    body: {
      username: signUpFormData.username,
      email: signUpFormData.email,
      password: signUpFormData.password,
    },
    error: "Sorry, there was a problem signing you up",
  };
  return postFetch(options).then((res) => {
    localStorage.setItem("auth", res.token);
  });
}

function logInPost(logInFormData) {
  const options = {
    endpoint: "logIn",
    body: {
      username: logInFormData.username,
      password: logInFormData.password,
    },
    error: "Could not log you in",
  };
  return postFetch(options).then((res) => {
    localStorage.setItem("auth", res.token);
  });
}

function postAddProject(projectData) {
  const options = {
    endpoint: "newproject",
    body: {
      project_name: projectData.project_name,
      project_description: projectData.project_description,
    },
    error: "Could not add project",
  };
  return postFetch(options);
}

// {
//   "step_name": "Sketch in pen",
//   "step_description": "Adding more details",
//   "step_link": "image.jpg"
// }

// POST /steps/:projectid

// function postAddStep() {
//   const options = {
//     endpoint:`/steps/:${projectId}`,
//   }

// }

// function postBase64(projectId, b64) {
//   const options = {
//     endpoint: `/steps/:${projectId}`,
//     body: {
//       step_name: projectData.project_name,
//       step_description: projectData.project_description,
//       step_link: b64,
//     },
//     error: "Could not add project",
//   };
// }

export { signUpPost, logInPost, postAddProject };
