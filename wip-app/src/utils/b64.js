const getB64 = function (file) {
  const reader = new FileReader();

  reader.onloadend = function () {
    // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
    const b64 = reader.result.replace(/^data:.+;base64,/, "");
    const b64WithType = "data:" + file.type + ";base64," + b64;
    return { type: file.type, b64: b64WithType };
  };

  reader.readAsDataURL(file);
};

export default getB64;
