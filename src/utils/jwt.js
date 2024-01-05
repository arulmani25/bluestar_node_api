const jwt = require("jsonwebtoken");
const UserdetailsModel = require("../models/UserdetailsModel");

const generateToken = async (user) => {
  try {
    const secretKey = "ahdgchadfusayyfscsasdwbdkwdhawsku";

    const token = jwt.sign(
      {
        userId: user._id,
        designation: user.designation,
        email_id: user.email_id,
      },
      secretKey
    );

    return token;
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const secretKey = "ahdgchadfuafdwbdkwdhawsku";

    if (!req.headers.authorization)
      throw new Error("Provide a valid JWT Token");

    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.json({ status: 401, message: "Invalid Token" });
      } else {
        let loggedUser = {
          userId: decoded.userId,
          designation: decoded.designation,
        };
        const userExist = await UserdetailsModel.findOne({
          email_id: decoded.email_id,
        });
        if (!userExist) {
          return res.json({ status: 401, message: "UnAuthorized User" });
        }
        req.loggedUser = loggedUser;
        next();
      }
    });
  } catch (error) {
    return res.json({ status: 401, message: error.message });
  }
};

module.exports = { generateToken, verifyToken };
