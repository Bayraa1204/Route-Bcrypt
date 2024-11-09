const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("./routes/userRoute.js");

app.use("/user", userRouter);

app.listen(8080, console.log("your server is now running on port 8080"));
