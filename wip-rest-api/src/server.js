const express = require("express");
const auth = require("../middleware/auth");
const error = require("../middleware/error");
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.json()); //so that express knows to use JSON

//Routes for users


//Routes for projects


//Routes for comments


//Error handler
