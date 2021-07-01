exports.up = async function up(sql) {
  await sql`
    CREATE TABLE USERS (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      first_name VARCHAR (40) NOT NULL,
      last_name VARCHAR (40) NOT NULL,
			email VARCHAR  (100) NOT NULL,
			password VARCHAR (100) NOT NULL
    )
  `;
};

// This is the description of the REVERSE
// of the change to the database
exports.down = async function down(sql) {
  await sql`
    DROP TABLE USERS
  `;
};
