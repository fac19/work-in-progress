// return string depending on file type
function addTypeString(type) {
  switch (type) {
    case "jpeg":
      return "data:image/jpeg;base64,";
      break;

    case "png":
      return "data:image/png;base64,";
      break;

    case "mp3":
      return "data:audio/mpeg;base64,";
      break;

    case "mpeg":
      return "data:video/mpeg;base64,";
      break;

    case "gif":
      return "data:image/gif;base64,";
      break;

    case "svg":
      return "data:image/svg+xml;base64,";
      break;

    case "webp":
      return "data:image/webp;base64,";
      break;

    default:
      break;
  }
}

// Gets type of file
function getType(filePath) {
  const fileArry = filePath.split(".");
  const returnType = fileArry[fileArry.length - 1];
  return returnType;
}

const getB64 = function (file) {
  const reader = new FileReader();

  const type = getType(file.name);

  reader.onloadend = function () {
    // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
    const b64 = reader.result.replace(/^data:.+;base64,/, "");
    const b64WithType = addTypeString(type) + b64;
    console.log("reader.onloadend -> b64WithType", b64WithType);
    return b64WithType;
  };

  reader.readAsDataURL(file);
};

export default getB64;
