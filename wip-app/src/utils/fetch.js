function postFetch({ endpoint, body, error }) {
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

  fetch(fetchURL, fetchObject).then((res) => {
    if (!res.ok) {
      throw new Error(`${error}, status: ${res.status}`);
    }
    return res.json();
  });
  // .catch(console.error('error in fetch.js line 22')) //change this
}

export default function SignUpPost(signUpFormData) {
  const options = {
    endpoint: "signUp",
    body: {
      name: signUpFormData.name,
      email: signUpFormData.email,
      password: signUpFormData.password,
    },
    error: "Sorry, there was a problem signing you up",
  };
  console.log(options);
  return postFetch(options).then((res) => {
    localStorage.setItem("auth", JSON.stringify(res));
  });
}
