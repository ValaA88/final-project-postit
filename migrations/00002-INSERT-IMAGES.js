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
  ('christmas12','/christmasPic/merry_christmas_postcard_12.jpeg','christmas' ),
  ('graduation1','/graduation_1.jpeg','graduation' ),
  ('graduation2','/graduation_2.jpeg','graduation' ),
  ('graduation3','/graduation_3.jpeg','graduation' ),
  ('graduation4','/graduation_4.jpeg','graduation' ),
  ('graduation5','/graduation_5.jpeg','graduation' ),
  ('graduation6','/graduation_6.jpeg','graduation' ),
  ('graduation7','/graduation_7.jpeg','graduation' ),
  ('graduation8','/graduation_8.jpeg','graduation' ),
  ('graduation9','/graduation_9.jpeg','graduation' ),
  ('graduation10','/graduation_10.jpeg','graduation' ),
  ('graduation11','/graduation_11.jpeg','graduation' ),
  ('graduation12','/graduation_12.jpeg','graduation' ),
  ('landscape1','/landscape_1.jpeg','landscape' ),
  ('landscape2','/landscape_2.jpeg','landscape' ),
  ('landscape3','/landscape_3.jpeg','landscape' ),
  ('landscape4','/landscape_4.jpeg','landscape' ),
  ('landscape5','/landscape_5.jpeg','landscape' ),
  ('landscape6','/landscape_6.jpeg','landscape' ),
  ('landscape7','/landscape_7.jpeg','landscape' ),
  ('landscape8','/landscape_8.jpeg','landscape' ),
  ('landscape9','/landscape_9.jpeg','landscape' ),
  ('landscape10','/landscape_10.jpeg','landscape' ),
  ('landscape11','/landscape_11.jpeg','landscape' ),
  ('landscape12','/landscape_12.jpeg','landscape' ),
  ('new year 1','/new_year__1.jpeg','new_year' ),
  ('new year 2','/new_year__2.jpeg','new_year' ),
  ('new year 3','/new_year__3.jpeg','new_year' ),
  ('new year 4','/new_year__4.jpeg','new_year' ),
  ('new year 5','/new_year__5.jpeg','new_year' ),
  ('new year 6','/new_year__6.jpeg','new_year' ),
  ('new year 7','/new_year__7.jpeg','new_year' ),
  ('new year 8','/new_year__8.jpeg','new_year' ),
  ('new year 9','/new_year__9.jpeg','new_year' ),
  ('new year 10','/new_year__10.jpeg','new_year' ),
  ('new year 11','/new_year__11.jpeg','new_year' ),
  ('new year 12','/new_year__12.jpeg','new_year' ),
  ('random1','/random__1.jpeg','random' ),
  ('random2','/random__2.jpeg','random' ),
  ('random3','/random__3.jpeg','random' ),
  ('random4','/random__4.jpeg','random' ),
  ('random5','/random__5.jpeg','random' ),
  ('random6','/random__6.jpeg','random' ),
  ('random7','/random__7.jpeg','random' ),
  ('random8','/random__8.jpeg','random' ),
  ('random9','/random__9.jpeg','random' ),
  ('random10','/random__10.jpeg','random' ),
  ('random11','/random__11.jpeg','random' ),
  ('random12','/random__12.jpeg','random' )
  `;
};

// This is the description of the REVERSE
// of the change to the database
exports.down = async function down(sql) {
  await sql`
   DELETE FROM IMAGES;

  `;
};
