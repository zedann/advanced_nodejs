const pool = require('./pool')

/**
 * Executes a query on the PostgreSQL database.
 * @param {string} queryStr - The SQL query string to execute.
 * @param {Array} [queryParams] - Optional array of parameters for the query.
 * @returns {Promise<Array>} A promise that resolves to the result rows of the query.
 * @throws {Error} Throws an error if the query execution fails.
 */

exports.dbQuery = async (queryStr, queryParams) => {

  try {
    return await pool.query(queryStr, queryParams)

  } catch (error) {
    console.error('Error executing query', error.stack);
    throw error;

  }


}

