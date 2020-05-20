function checkAuth(req, res, next) {
    const user = req.user;
    if (!user) {
        res.status(401).send(); // send log in page
    } else {
        next();
    }
}

module.exports = checkAuth;