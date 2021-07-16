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
  ('graduation1','/graduationPic/graduation_1.jpeg','graduation' ),
  ('graduation2','/graduationPic/graduation_2.jpeg','graduation' ),
  ('graduation3','/graduationPic/graduation_3.jpeg','graduation' ),
  ('graduation4','/graduationPic/graduation_4.jpeg','graduation' ),
  ('graduation5','/graduationPic/graduation_5.jpeg','graduation' ),
  ('graduation6','/graduationPic/graduation_6.jpeg','graduation' ),
  ('graduation7','/graduationPic/graduation_7.jpeg','graduation' ),
  ('graduation8','/graduationPic/graduation_8.jpeg','graduation' ),
  ('graduation9','/graduationPic/graduation_9.jpeg','graduation' ),
  ('graduation10','/graduationPic/graduation_10.jpeg','graduation' ),
  ('graduation11','/graduationPic/graduation_11.jpeg','graduation' ),
  ('graduation12','/graduationPic/graduation_12.jpeg','graduation' ),
  ('landscape1','/landscapePic/landscape_1.jpeg','landscape' ),
  ('landscape2','/landscapePic/landscape_2.jpeg','landscape' ),
  ('landscape3','/landscapePic/landscape_3.jpeg','landscape' ),
  ('landscape4','/landscapePic/landscape_4.jpeg','landscape' ),
  ('landscape5','/landscapePic/landscape_5.jpeg','landscape' ),
  ('landscape6','/landscapePic/landscape_6.jpeg','landscape' ),
  ('landscape7','/landscapePic/landscape_7.jpeg','landscape' ),
  ('landscape8','/landscapePic/landscape_8.jpeg','landscape' ),
  ('landscape9','/landscapePic/landscape_9.jpeg','landscape' ),
  ('landscape10','/landscapePic/landscape_10.jpeg','landscape' ),
  ('landscape11','/landscapePic/landscape_11.jpeg','landscape' ),
  ('landscape12','/landscapePic/landscape_12.jpeg','landscape' ),
  ('new year 1','/newYearPic/new_year_1.jpeg','newYear' ),
  ('new year 2','/newYearPic/new_year_2.jpeg','newYear' ),
  ('new year 3','/newYearPic/new_year_3.jpeg','newYear' ),
  ('new year 4','/newYearPic/new_year_4.jpeg','newYear' ),
  ('new year 5','/newYearPic/new_year_5.jpeg','newYear' ),
  ('new year 6','/newYearPic/new_year_6.jpeg','newYear' ),
  ('new year 7','/newYearPic/new_year_7.jpeg','newYear' ),
  ('new year 8','/newYearPic/new_year_8.jpeg','newYear' ),
  ('new year 9','/newYearPic/new_year_9.jpeg','newYear' ),
  ('new year 10','/newYearPic/new_year_10.jpeg','newYear' ),
  ('new year 11','/newYearPic/new_year_11.jpeg','newYear' ),
  ('new year 12','/newYearPic/new_year_12.jpeg','newYear' ),
  ('random1','/randomPic/random_1.jpeg','random' ),
  ('random2','/randomPic/random_2.jpeg','random' ),
  ('random3','/randomPic/random_3.jpeg','random' ),
  ('random4','/randomPic/random_4.jpeg','random' ),
  ('random5','/randomPic/random_5.jpeg','random' ),
  ('random6','/randomPic/random_6.jpeg','random' ),
  ('random7','/randomPic/random_7.jpeg','random' ),
  ('random8','/randomPic/random_8.jpeg','random' ),
  ('random9','/randomPic/random_9.jpeg','random' ),
  ('random10','/randomPic/random_10.jpeg','random' ),
  ('random11','/randomPic/random_11.jpeg','random' ),
  ('random12','/randomPic/random_12.jpeg','random' )
  `;
};

// This is the description of the REVERSE
// of the change to the database
exports.down = async function down(sql) {
  await sql`
   DELETE FROM IMAGES;

  `;
};
