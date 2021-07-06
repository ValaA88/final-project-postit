exports.up = async function up(sql) {
  await sql`
INSERT INTO IMAGES
  (title, url, category)
VALUES
  ('birthday1','/birthdayPic/happy_birthday_card_1.jpeg','birthday' ),
  ('birthday2','/birthdayPic/happy_birthday_card_2.jpeg','birthday' ),
  ('birthday3','/birthdayPic/happy_birthday_card_3.jpeg','birthday' ),
  ('birthday4','/birthdayPic/happy_birthday_card_4.jpeg','birthday' ),
  ('birthday5','/birthdayPic/happy_birthday_card_5.jpeg','birthday' ),
  ('birthday6','/birthdayPic/happy_birthday_card_6.jpeg','birthday' ),
  ('birthday7','/birthdayPic/happy_birthday_card_7.jpeg','birthday' ),
  ('birthday8','/birthdayPic/happy_birthday_card_8.jpeg','birthday' ),
  ('birthday9','/birthdayPic/happy_birthday_card_9.jpeg','birthday' ),
  ('birthday10','/birthdayPic/happy_birthday_card_10.jpeg','birthday' ),
  ('birthday11','/birthdayPic/happy_birthday_card_11.jpeg','birthday' ),
  ('birthday12','/birthdayPic/happy_birthday_card_12.jpeg','birthday' ),
  ('christmas1','/christmasPic/merry_christmas_postcard_1.jpeg','christmas' ),
  ('christmas2','/christmasPic/merry_christmas_postcard_2.jpeg','christmas' ),
  ('christmas3','/christmasPic/merry_christmas_postcard_3.jpeg','christmas' ),
  ('christmas4','/christmasPic/merry_christmas_postcard_4.jpeg','christmas' ),
  ('christmas5','/christmasPic/merry_christmas_postcard_5.jpeg','christmas' ),
  ('christmas6','/christmasPic/merry_christmas_postcard_6.jpeg','christmas' ),
  ('christmas7','/christmasPic/merry_christmas_postcard_7.jpeg','christmas' ),
  ('christmas8','/christmasPic/merry_christmas_postcard_8.jpeg','christmas' ),
  ('christmas9','/christmasPic/merry_christmas_postcard_9.jpeg','christmas' ),
  ('christmas10','/christmasPic/merry_christmas_postcard_10.jpeg','christmas' ),
  ('christmas11','/christmasPic/merry_christmas_postcard_11.jpeg','christmas' ),
  ('christmas12','/christmasPic/merry_christmas_postcard_12.jpeg','christmas' )
  `;
};

// This is the description of the REVERSE
// of the change to the database
exports.down = async function down(sql) {
  await sql`
   DELETE FROM IMAGES;

  `;
};
