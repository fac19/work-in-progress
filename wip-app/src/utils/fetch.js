async function postFetch({ endpoint, body, error }) {
  // const headers = {
  //     'content-type': 'application/JSON'
  // };

  const fetchObject = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "content-type": "application/JSON",
    },
    body: JSON.stringify(body),
  };

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error(`${error}, status: ${res.status}`);
    }
    return res.json();
  });
  // .catch(console.error('error in fetch.js line 22')) //change this
}

function signUpPost(signUpFormData) {
  const options = {
    endpoint: "signUp",
    body: {
      username: signUpFormData.username,
      email: signUpFormData.email,
      password: signUpFormData.password,
    },
    error: "Sorry, there was a problem signing you up",
  };
  return postFetch(options).then((res) => {
    console.log("postFetch-> res", res);
    localStorage.setItem("auth", JSON.stringify(res));
  });
}

function logInGet(logInFormData) {
  const options = {
    endpoint: "logIn",
    body: {
      email: logInFormData.email,
      password: logInFormData.password,
    },
    errorMessage: "Could not log you in",
  };
  return postFetch(options).then((res) => {
    localStorage.setItem("auth", JSON.stringify(res));
  });
}

export { signUpPost, logInGet };
