const getB64 = function (file) {
  const reader = new FileReader();

  reader.onloadend = function () {
    // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
    const b64 = reader.result.replace(/^data:.+;base64,/, "");
    return "data:" + file.type + ";base64," + b64;
  };

  reader.readAsDataURL(file);
};

export default getB64;
