async function postImage(file) {
  const cloudObject = {
    file: file.b64,
    format: "WebP",
  };
  const cloudURL = "/" + file.type + "/upload";
  return await fetch(cloudURL, cloudObject).then((response) => response.json());
}

export { postImage };
