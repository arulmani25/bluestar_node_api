/* eslint-disable no-undef */
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

// Function to hash (encrypt) the password
const encryptPassword = async (password) => {
    // const encryptedPassword = await bcrypt.hash(password, 10);
    // return encryptedPassword;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

// Function to compare (check) the password with the hashed password
const checkPassword = async (password, dbPassword) => {
    // const isMatch = await bcrypt.compare(password, dbPassword);
    // return isMatch;

    const isMatch = await bcrypt.compare(password, dbPassword);
    return isMatch;
};

module.exports = { encryptPassword, checkPassword };
