const winston = require("winston");
// [date] [logger level] [message]

const dateFormat = () => {
  return new Date(Date.now()).toLocaleString();
};

class LoggerService {
  constructor(route) {
    this.route = route;
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${
          info.message
        } `;
        return info.obj
          ? message + ` | data -> ${JSON.stringify(info.obj)}`
          : message;
      }),
      //   defaultMeta: { service: "user-service" },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `./log/${route}.log` }),
      ],
    });
  }
  async info(message, obj = null) {
    if (!obj) this.logger.log("info", message);
    else this.logger.log("info", message, { obj });
  }
  async error(message, obj = null) {
    if (!obj) this.logger.log("error", message);
    else this.logger.log("error", message, { obj });
  }
}

module.exports = LoggerService;
