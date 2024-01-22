const crypto = require("crypto-js");

// const secretKey = process.env.ENCRYPT_SECRET_KEY;

const secretKey = "ahgdashdfytsdgsdsbluehghsagdstar";

const encryptText = (text) => {
  const encrypted = crypto.AES.encrypt(text, secretKey).toString();
  return encrypted;
};

const decryptText = (encryptedText) => {
  const decrypt = crypto.AES.decrypt(encryptedText, secretKey);
  const decryptedData = decrypt.toString(crypto.enc.Utf8);
  return decryptedData;
};

module.exports = { encryptText, decryptText };
