require("dotenv").config();

const pg = require("pg"); // Import the pg module
const Pool = pg.Pool; // Use pg.Pool

const pool = new Pool({
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
  user: "postgres",
  host: "localhost",
  database: "boba",
  password: "12345",
  port: 5432,
});

// console.log(process.env.DB_PASSWORD);

pool.on("connect", () => {
  console.log("connected to the Database");
});

// pool.query("SELECT * FROM shops", (error, results) => {
//   if (error) {
//     console.error("Error executing query:", error);
//   } else {
//     console.log("Query Result:", results.rows);
//   }
//   // response.status(200).json(results.rows);
//   // pool.end();
// });

const fetchMatch = (request, response) => {
  console.log("Route Accessed");
  const code = request.params.drinkCode;
  pool.query(
    "SELECT * FROM drinksv2 WHERE code LIKE $1",
    [code],
    (error, results) => {
      if (error) {
        console.error("Hit error when accessing drinks-v2");
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
