exports.up = async function up(sql) {
  await sql`
INSERT INTO IMAGES
  (title, url, category)
VALUES
  ('birthday1','/birthdayPic/happy_birthday_card_1.jpeg','birthday' ),
  ('birthday2','/birthdayPic/happy_birthday_card_2.jpeg','birthday' ),
  ('birthday3','/birthdayPic/happy_birthday_card_3.jpeg','birthday' ),
  ('christmas1','/christmasPic/merry_christmas_postcard_1.jpeg','christmas' )
  `;
};

// This is the description of the REVERSE
// of the change to the database
exports.down = async function down(sql) {
  await sql`
   DELETE FROM IMAGES;

  `;
};
