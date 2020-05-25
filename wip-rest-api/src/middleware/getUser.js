// const jwt = require("jsonwebtoken");
// require("dotenv");

// // dotenv.config();
// const SECRET = process.env.JWT_SECRET;

// function getUser(req, res, next) {
//   const token = req.cookies.token;
//   if (token) {
//     const user = jwt.verify(token, SECRET);
//     req.user = user.userId;
//   }
//   next();
// }

// module.exports = getUser;

// To remove=> Put getUser and authorise into one file
