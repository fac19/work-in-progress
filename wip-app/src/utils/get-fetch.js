const authToken = localStorage.getItem("auth");
console.log("authToken", authToken);

async function getFetch({ endpoint, body, error }) {
  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/JSON",
      Authorization: authToken,
    },
  };

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

function explorePage() {
  const options = {
    endpoint: "exploreprojects",
    errorMessage: "Feed error",
  };
  return getFetch(options);
}

export { feedPage, explorePage };
