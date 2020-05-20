const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config()
const SECRET = process.env.JWT_SECRET;

function getUser(req, res, next){
    const token = req.cookies.token;
    if (token) {
      const user = jwt.verify(token, SECRET);
      req.user = user.username;
    }
    next();
}

module.exports = getUser;