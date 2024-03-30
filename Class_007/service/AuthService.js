const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const {
  getUserByEmail,
  getUserByUsername,
  registerUser,
} = require("../models/UserModel");

async function RegisterUser(userDetails) {
  console.log(userDetails.email);

  //confirm if the username and email already exists
  //if not, generate userID, encrypt password and save to file
  //if yes return error response
  try {
    const user = getUserByEmail(userDetails.email);
    if (!user) {
      const user = getUserByUsername(userDetails.username);
      if (!user) {
        userDetails.id = uuidv4();
        userDetails.password = await bcrypt.hash(userDetails.password, 10);
        console.log(userDetails);
        newUser = registerUser(userDetails);

        delete userDetails.password;
        return userDetails;
      }
    }

    // else {
    //   throw new Error("Email already exists");
    // }
  } catch (error) {
    // console.log(error)
    // throw error;
  }
}

async function LoginUser(username, password) {
  //call the model function getByUsername
  //compare password
  const user = getUserByUsername(username);

  if (!user) {
    return user;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("from service", isMatch);
  if (isMatch) {
    delete user.password;
    return user;
  }
}

module.exports = {
  RegisterUser,
  LoginUser,
};
