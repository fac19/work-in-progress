async function postFetch({ endpoint, body }) {
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

  return await fetch(fetchURL, fetchObject).then((response) => response.json());
}

function signUpPost(signUpData, setError) {
  const options = {
    endpoint: "signup",
    body: {
      username: signUpData.username,
      email: signUpData.email,
      password: signUpData.password,
    },
  };
  return postFetch(options, setError).then((data) => {
    if (data.name === "error") {
      let errorMessage = data.message.includes("username")
        ? "This username is already in use!"
        : "This email is already in use!";
      setError(errorMessage);
      throw new Error(`Error: ${data.message}`);
    } else {
      localStorage.setItem("auth", data.token);
    }
  });
}

function logInPost(logInData) {
  const options = {
    endpoint: "logIn",
    body: {
      username: logInData.username,
      password: logInData.password,
    },
  };
  return postFetch(options).then((data) => {
    if (data.name) {
      throw new Error(`${data.message}`);
    } else {
      localStorage.setItem("auth", data.token);
    }
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

function postAddStep(projectId, stepData, stepURL) {
  // post request to cloudinary stepData.file -> stepData.step_link

  const options = {
    endpoint: "steps/" + projectId,
    body: {
      step_name: stepData.step_name,
      step_description: stepData.step_description,
      step_link: stepURL,
    },
    error: "Could not add step",
  };
}

export { signUpPost, logInPost, postAddProject, postAddStep };
