const mongoose = require("mongoose");
const { seedRecordToDB } = require("./seeding");
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
      "mongodb://localhost:27017/blueStar",
      mongodbConfig.options
    );
    seedRecordToDB();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("err================== MongoDB!", err);
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToMongoDB;
