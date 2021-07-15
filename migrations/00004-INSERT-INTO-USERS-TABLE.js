const users = [
  {
    first_name: 'Karl',
    last_name: 'Horky',
    email: 'karlhorky',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Janos',
    last_name: 'Spanyol',
    email: 'janosspanyol',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Nicolas',
    last_name: 'Gadner',
    email: 'nicolasgadner1',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Nicolas',
    last_name: 'Gadner',
    email: 'nicolasgadner2',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Nicolas',
    last_name: 'Gadner',
    email: 'nicolasgadner3',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Nicolas',
    last_name: 'Gadner',
    email: 'nicolasgadner4',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
  {
    first_name: 'Nicolas',
    last_name: 'Gadner',
    email: 'nicolasgadner5',
    password: '23j8f9u98sajij398u9asijgio34jo4',
  },
];

exports.users = users;

exports.up = async function up(sql) {
  await sql`
    INSERT INTO users ${sql(
      users,
      'first_name',
      'last_name',
      'email',
      'password',
    )}
  `;
};

exports.down = async function down(sql) {
  for (const user of users) {
    await sql`
      DELETE FROM
        users
      WHERE
        first_name = ${user.first_name} AND
        last_name = ${user.last_name}
    `;
  }
};
