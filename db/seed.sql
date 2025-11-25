INSERT into gresy_user VALUES (
	nextval('gresy_user_id_seq'),
	'david@neurocollective.tech',
	'password'
);

INSERT into gresy_user VALUES (
	nextval('gresy_user_id_seq'),
	'glenn@gresy.com',
	'password'
);

INSERT into city VALUES (
	nextval('city_id_seq'),
	'New York'
);

INSERT into borough VALUES (
	nextval('borough_id_seq'),
	1,
	'Queens'
),(
	nextval('borough_id_seq'),
	1,
	'Brooklyn'
),(
	nextval('borough_id_seq'),
	1,
	'Manhattan'
);

INSERT into neighborhood VALUES (
	nextval('neighborhood_id_seq'),
	1,
	2,
	'Bay Ridge'
),(
	nextval('neighborhood_id_seq'),
	1,
	2,
	'Financial District'
);

INSERT into restaurant VALUES (
	nextval('restaurant_id_seq'),
	'Tanoreen',
	'7400 3rd avenue, bay ridge ny 11209',
	1,
	2,
	1,
	NULL
),(
	nextval('restaurant_id_seq'),
	'Elia',
	'8600 3rd avenue, bay ridge ny 11209',
	1,
	2,
	1,
	NULL
);
