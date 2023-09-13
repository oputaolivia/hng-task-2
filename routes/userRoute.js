const express = require("express");
const {
  createUser,
  retrieveUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/userControls");

const userRoute = express.Router();

userRoute.post("/", createUser);
userRoute.get("/", getUsers);
userRoute.get("/:id", retrieveUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

module.exports ={
    userRoute,
};
