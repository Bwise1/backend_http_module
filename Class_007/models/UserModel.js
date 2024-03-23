const { readFile, writeFile } = require("../utils/fileManagement");
const User = {
  id: String,
  name: String,
  email: String,
  username: String,
  password: String,
};

const userFile = "./data/user.json";

function getUserByEmail(email) {
  let user = null;

  //readTheFile
  const users = readFile(userFile);
  //look for user with given email
  for (let id in users) {
    if (users[id].email === email) {
      user = users[id];
      return user;
    }
  }
  //return the user
  return user;
}

function getUserByUsername(username) {
  let user = null;

  //readTheFile
  const users = readFile(userFile);
  //look for user with given username
  for (let id in users) {
    if (users[id].username === username) {
      user = users[id];
      return user;
    }
  }
  //return the user
  return user;
}

function registerUser(userDetails) {
  writeFile(userFile, userDetails);
  return userDetails;
}

module.exports = {
  getUserByEmail,
  getUserByUsername,
  registerUser,
};
