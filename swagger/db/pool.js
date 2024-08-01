const { Pool } = require("pg");
// console.log(process.env.DB_URL)
const pool = new Pool({
  // connectionString: process.env.DB_URL,
  connectionString: process.env.DB_URL,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 30000,
  max: 20
});

pool.on('connect', () => {
  console.log('database connected')
})



pool.on('remove', () => {
  console.log('database connection removed')
})

module.exports = pool
