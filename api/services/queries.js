const pg = require("pg"); // Import the pg module
const createPool = require("@databases/pg");
var fs = require("fs");
const Pool = pg.Pool; // Use pg.Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log(process.env.DB_PASSWORD);

pool.on("connect", () => {
  console.log("connected to the Database");
});

pool.query("SELECT * FROM shops", (error, results) => {
  if (error) {
    console.error("Error executing query:", error);
  } else {
    console.log("Query Result:", results.rows);
  }
  // response.status(200).json(results.rows);
  // pool.end();
});

const fetchMatch = (request, response) => {
  console.log("Route Accessed");
  const selected1 = request.params.param1;
  const selected2 = request.params.param2;
  const selected3 = request.params.param3;
  pool.query(
    "SELECT * FROM tb WHERE $1 = ANY, $2 = ANY, $3 = ANY",
    [selected1, selected2, selected3],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("Query Result:", results.rows);
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  fetchMatch,
};
