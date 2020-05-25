// function checkAuth(req, res, next) {
//   const user = req.user;
//   if (!user) {
//     res.status(401).send(`
//     <h1>Please log in to view this page</h1>
//     <a href="/log-in">Log in</a>
//   `);
//   } else {
//     next();
//   }
// }

const jwt = require("jsonwebtoken");
const model = require("../model/users-model");

require("dotenv");
const SECRET = process.env.JWT_SECRET;

function checkAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new Error("Authorization header is required");
    error.status = 400;
    next(error);
  } else {
    const token = authHeader.replace("Bearer ", "");
    try {
      // if verification fails JWT throws an error, hence the try/catch
      const tokenData = jwt.verify(token, SECRET);
      console.log("30", tokenData.user);
      model
        .getUserById(tokenData.user)
        .then((user) => {
          // attach the authenticated user to the request object
          // so other handlers can access it without doing all this nonsense
          // console.log(user
          req.user = user;
          next();
        })
        .catch(next);
    } catch (_) {
      // we don't use the caught error, since we know it came from jwt.verify
      const error = new Error("Unauthorized");
      error.status = 401;
      next(error);
    }
  }
}

module.exports = checkAuth;
