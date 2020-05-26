async function postFetch({ endpoint, body, error }) {
  const fetchObject = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject).then((res) => {
    if (!res.ok) {
      throw new Error(`${error}, status: ${res.status}`);
    } else {
      return res.json();
    }
  });
  // .catch(console.error('error in fetch.js line 22')) //change this
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
    localStorage.setItem("auth", JSON.stringify(res.token));
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
    localStorage.setItem("auth", JSON.stringify(res.token));
  });
}

export { signUpPost, logInPost };
