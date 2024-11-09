const Router = require("express");
const userRouter = Router();

const userController = require("../controller/userController.js");
userRouter.post("/signup", userController.createUser);

userRouter.post("/login", userController.checkUser);

module.exports = userRouter;
