import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read the PostgreSQL secret connection information
// (host, database, username, password) from the .env file

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getImages() {
  const images = await sql`
    SELECT *
    FROM
      images
  `;
  return images;
}

export async function getCardById(id) {
  const card = await sql`
    SELECT *
    FROM
      images
      WHERE
      id = ${id}
  `;

  return card[0];
}
