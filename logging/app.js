const express = require("express");
const app = express();
const LoggerService = require("./logger.service");

const testController = require("./controllers/testController");

const logger = new LoggerService("app");
app.use((req, res, next) => {
  logger.info("Client Ip", req.ip);
  next();
});

app.get("/", testController.testFunc);

app.listen(3000, () => {
  console.log("server run on port 3000");
});
