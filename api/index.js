require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./services/queries.js");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Fetches from db
app.get("/drink/:drinkCode", db.fetchMatch);

// Initial text
app.get("/", (request, response) => {
  response.json({ info: "backend server with pg" });
});

// App is running on port 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
