const model = require("../model/users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const SECRET = process.env.JWT_SECRET

function postSignUp(req, res, next) {
  const username = req.body.username
  const email = req.body.email
  const bio = req.body.bio
  const vocation = req.vocation.bio
  const password = req.body.password
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => {
      model
        .addUser(username, email, bio, vocation, hash)
        .then((result) => {
          const token = jwt.sign({ user: result.id }, SECRET, {
            expiresIn: "24h",
          })
          result.token = token
          res.status(201).send(result)
        })
        .catch(next)
    })
    .catch(console.error)
}

function postLogIn(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  model
    .getUserByName(username)
    .then((loginObject) => {
      return bcrypt.compare(password, loginObject.password)
    })
    .then((match) => {
      if (!match) {
        const error = new Error("Unauthorized access. Please try again.")
        error.status = 401
        next(error)
      } else {
        const token = jwt.sign({ user: match.id }, SECRET, {
          expiresIn: "24h",
        })
        res.status(200).send({ token: token })
      }
    })
    .catch(next)
}

module.exports = { postSignUp, postLogIn }
