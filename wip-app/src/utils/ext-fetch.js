async function postImage(file) {
  const fetchObject = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      file: file,
      upload_preset: "lmos8zte", // secret
    }),
  };
  const cloudURL = "https://api.cloudinary.com/v1_1/dbtc3cbem/auto/upload";
  const response = await fetch(cloudURL, fetchObject);
  return await response.json();
}

export { postImage };
