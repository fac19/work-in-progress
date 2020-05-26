const authToken = localStorage.getItem("auth");

async function getFetch({ endpoint, error }) {
  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/JSON",
      Authorization: authToken,
    },
  };

  console.log(fetchObject);

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error(`${error}, status: ${res.status}`);
    }
    return res.json();
  });
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
    console.log("38", res);
    return res;
  });
}

export { feedPage, getUser };
