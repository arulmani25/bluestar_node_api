const mongoose = require("mongoose");

const mongodbConfig = {
  url: process.env.MONGO_CONNECTION_STRING,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
// console.log("====mongodbConfig", mongodbConfig);
async function connectToMongoDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING,
      mongodbConfig.options
    );
        console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("err================== MongoDB!", err);
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToMongoDB;
