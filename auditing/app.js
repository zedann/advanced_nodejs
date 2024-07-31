const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
  path: "../.env",
});

const { dbQuery } = require('./db/db.connection.js');
const { testMe } = require("./controllers/test.controller.js");
app.get('/testAuditing', testMe)

app.get('/', async (req, res, next) => {

  const data = await dbQuery("SELECT * FROM test_table")


  res.status(200).json({
    status: "success",
    results: data.rowCount,
    data: data.rows
  })

})

app.listen("3000", () => {
  console.log("server listen on port 3000")
})
