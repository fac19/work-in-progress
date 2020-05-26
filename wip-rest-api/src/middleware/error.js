// eslint-disable-next-line no-unused-vars
function handleErrors(error, req, res, next) {
  console.log(error);
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  const name = error.name || "Error";
  const errorObj = { name: name, message: message };
  res.status(status).send(errorObj);
}

module.exports = handleErrors;
