async function getFetch({ endpoint, error }) {
  const authToken = localStorage.getItem("auth");

  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/JSON",
      Authorization: authToken,
    },
  };

  console.log(fetchObject);

  const fetchURL = `https://wip-rest-api.herokuapp.com/${endpoint}`;

  return await fetch(fetchURL, fetchObject)
    .then((res) => {
      console.log(res);
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
    console.log("38", res);
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

export { feedPage, getUser, explorePage };
