function handleErrors(error, req, res, next) {
    console.error(error);
    const status = error.status || 500;
    res.status(status).send('<h1>Something went wrong</h1>');
}

module.exports = handleErrors;