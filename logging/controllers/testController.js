const LoggerService = require("../logger.service");

const logger = new LoggerService("testController");

exports.testFunc = async (req, res, next) => {
  logger.info(req.url, {
    file: "testContoller",
  });
  res.send("testController");
};
