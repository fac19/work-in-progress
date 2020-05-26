const model = require("../model/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

function signUp(req, res, next) {
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.status(400).send({ message: "Request body cannot be empty" });
  }
  const newUsername = req.body.username;
  const newEmail = req.body.email;
  const newBio = req.body.bio;
  const newVocation = req.body.vocation;
  const newPassword = req.body.password;
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(newPassword, salt))
    .then((hash) => {
      const newUser = {
        username: newUsername,
        email: newEmail,
        bio: newBio,
        vocation: newVocation,
        password: hash,
      };
      model
        .addUser(newUser)
        .then((userInfo) => {
          const token = jwt.sign({ user: userInfo.id }, SECRET, {
            expiresIn: "24h",
          });
          userInfo.token = token;
          res.status(201).send(userInfo);
        })
        .catch(next);
    })
    .catch(console.error);
}

function logIn(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  model
    .getUserByName(username)
    .then((loginObject) => {
      return bcrypt.compare(password, loginObject.password).then((match) => {
        if (!match) {
          const error = new Error("Unauthorized access. Please try again.");
          error.status = 401;
          next(error);
        } else {
          const token = jwt.sign({ user: loginObject.id }, SECRET, {
            expiresIn: "24h",
          });
          res.status(200).send({ token: token });
        }
      });
    })
    .catch(next);
}

function get(req, res, next) {
  const userId = req.user.id;
  model
    .getUserById(userId)
    .then((user) => res.status(200).send(user))
    .catch(next);
}

function update(req, res, next) {
  const userId = req.user.id;
  const newUserData = req.body;
  model
    .updateUser(userId, newUserData)
    .then((newData) => res.status(201).send(newData))
    .catch(next);
}

function deleteUser(req, res, next) {
  const userId = req.user.id;
  model
    .deleteUser(userId)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}

module.exports = { signUp, logIn, get, update, deleteUser };
