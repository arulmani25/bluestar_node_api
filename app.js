const dotenv = require("dotenv");
const path = require("path");
// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV || "production"}`),
});
const express = require("express");

const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const responseMiddleware = require("./src/middlewares/response.middleware");
const apiRouter = require("./src/controllers");
const mobileRouter = require("./src/controllers/mobile");

// Other required dependencies
const connectToMongoDB = require("./src/config/mongodb");
const { errorHandler } = require("./src/middlewares/errorhandler");
const model = require("./src/models/index");
const fs = require("fs");
const { temp } = require("./src/utils");
const app = express();

// Database connectivity
connectToMongoDB()
  .then(() => console.log("MONGODB connection successfully connected"))
  .catch((err) => {
    console.error("Error creating MONGODB connection:", err);
    process.exit(1);
  });

const corsOption = {
  origin: "*",
};

// Middleware
app.use(fileUpload());
app.use(responseMiddleware());
app.use(cors(corsOption));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Body parser setup
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization"
  );
  next();
});

// Routes setup (Add your routes here)
app.use("/api", express.static(path.join(__dirname)));
app.use("/api", apiRouter);
app.use("/api/mobile", mobileRouter);

//delete uploaded file

app.post("/deletefile", (req, res, next) => {
  try {
    const { filePath } = req.body;
    if (!fs.existsSync(`${filePath}`)) {
      return res.json({
        message: "Path Not Exist",
        status: "Failure",
        code: 404,
      });
    }
    fs.unlinkSync(`${filePath}`);
    return res.json({
      message: "File Deleted Successfully",
      status: "Success",
      code: 200,
    });
  } catch (error) {
    console.log(error);
  }
});
//error handler
app.use(errorHandler);

//qrcode
const Buffer = require("buffer").Buffer;

app.post("/qr", async (req, res) => {
  try {
    const data = await model.newEquipmentTags.find({});

    for (const iterator of data) {
      if (iterator.qrcode) {
        const imageBuffer = Buffer.from(
          iterator.qrcode?.split("base64,")[1],
          "base64"
        );
        fs.writeFileSync(
          `M:/pradeep/qrcode/${iterator.cobie_tag}.png`,
          imageBuffer,
          (err) => {
            if (err) {
              console.error("Error:", err);
            } else {
              console.log("Image successfully saved.");
            }
          }
        );
      }
    }
    return res.json({ message: "convertion finished" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/qrupdate", async (req, res) => {
  const record = await model.newEquipmentTags.find({});

  for (const iterator of record) {
    await model.equipmentsModel.findOneAndUpdate(
      { equipment_tag: iterator.equipment_tag },
      { $set: { qrcode: iterator.qrcode, cobie_tag: iterator.cobie_tag } }
    );
    await model.checkListValidation.findOneAndUpdate(
      { equipment_tag: iterator.equipment_tag },
      { $set: { cobie_tag: iterator.cobie_tag } }
    );
  }

  return res.json({ message: "success" });
});

app.post("/pdf", async (req, res) => {
  try {
    const data = await temp();
    return res.send("success");
  } catch (err) {
    console.log(err);
  }
});
// 404 handler
app.use((req, res) => {
  res.status(404).end("Page Not Found");
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).render("error");
});

module.exports = app;
