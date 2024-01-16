const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
};

const checkPassword = async (password, dbPassword) => {
  const decryptedPassword = await bcrypt.compare(password, dbPassword);
  return decryptedPassword;
};

module.exports = { encryptPassword, checkPassword };
