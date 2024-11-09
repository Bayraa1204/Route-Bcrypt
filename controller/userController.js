const fs = require("fs");
const bcrypt = require("bcrypt");
const users = require("../mockData.json");

const createUser = (req, res) => {
  const body = req.body;
  const { name, password } = body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const user = {
    name,
    password: hashPassword,
  };
  users.push(user);
  fs.writeFileSync("./mockData.json", JSON.stringify(users), (err) => {
    if (err) console.log(err);
  });
};

const checkUser = (req, res) => {
  const body = req.body;
  const { name, password } = body;
  const foundUser = users.find((user) => {
    return name === user.name;
  });
  const isValidPass = bcrypt.compareSync(password, foundUser.password);
  if (isValidPass) {
    res.send("amjilttai nevterlee");
  } else {
    res.send("userName or password is incorrect");
  }
};

module.exports.createUser = createUser;
module.exports.checkUser = checkUser;
