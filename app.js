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
app.use("/api", apiRouter);
app.use("/api/mobile", mobileRouter);

//error handler
app.use(errorHandler);

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
