const pg = require("pg"); // Import the pg module
const Pool = pg.Pool; // Use pg.Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("connected to the Database");
});

// const functionnamehere = (request, response) => {
//   console.log("Route Accessed");
//   const selectedfield = request.params.name;
//   pool.query(
//     "SELECT * FROM tb WHERE $1 = ANY ....",
//     [selectedfield],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       console.log("Query Result:", results.rows);
//       response.status(200).json(results.rows);
//     }
//   );
// };

// module.exports = {
//   functionnamehere,
// };
