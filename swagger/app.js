const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(cors());
dotenv.config({
  path: "../.env",
});

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
const { dbQuery } = require("./db/db.connection.js");
const { testMe } = require("./controllers/test.controller.js");
app.get("/testAuditing", testMe);
app.get("/test", (req, res, next) => {
  res.status(200).json({
    message: "test",
  });
});

app.post("/test", (req, res, next) => {
  const data = req.body;
  res.json({
    body: data,
  });
});

app.get("/", async (req, res, next) => {
  const data = await dbQuery("SELECT * FROM test_table");

  res.status(200).json({
    status: "success",
    results: data.rowCount,
    data: data.rows,
  });
});

app.listen("3001", () => {
  console.log("server listen on port 3001");
});
