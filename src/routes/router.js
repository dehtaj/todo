const express = require("express");
const route = express.Router();

const createTodo=require("../controllers/createTodo.controller")

route.post("/createtodo",createTodo);

module.exports = route;