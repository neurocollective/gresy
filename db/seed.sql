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
	'7523 3rd Avenue, Bay Ridge NY 11209',
	1,
	2,
	1,
	NULL,
	'https://image.resy.com/3/003/1/6599/f5911a01f7d5337271d2f6a37d1d06151a924b50/jpg/1:1/800'
),(
	nextval('restaurant_id_seq'),
	'Elia',
	'8611 3rd Ave, Bay Ridge NY 11209',
	1,
	2,
	1,
	NULL,
	'https://image.resy.com/3/003/1/2358/9ba4d98e45460a711bbdb5bb809edb0d622e20ea/jpg/1:1/800'
);

-- 12-2-2025, tanoreen

INSERT INTO seating_inventory VALUES (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1700, 
	1800,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1715, -- 5 to 6
	1815,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1730, -- 5 to 6
	1830,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1745, -- 5 to 6
	1845,
	now(),
	now()
);

INSERT INTO seating_inventory VALUES  (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1800, -- 6 to 7
	1900,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1815, -- 6 to 7
	1915,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1830, -- 6 to 7
	1930,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1845, -- 6 to 7
	1945,
	now(),
	now()
);

INSERT INTO seating_inventory VALUES (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1900, -- 7 to 8
	2000,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1915, -- 7 to 8
	2015,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1930, -- 7 to 8
	2030,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,2),
	1945, -- 7 to 8
	2045,
	now(),
	now()
);

-- 12-3-2025, tanoreen

INSERT INTO seating_inventory VALUES (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1700, 
	1800,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1715, -- 5 to 6
	1815,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1730, -- 5 to 6
	1830,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1745, -- 5 to 6
	1845,
	now(),
	now()
);

INSERT INTO seating_inventory VALUES  (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1800, -- 6 to 7
	1900,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1815, -- 6 to 7
	1915,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1830, -- 6 to 7
	1930,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1845, -- 6 to 7
	1945,
	now(),
	now()
);

INSERT INTO seating_inventory VALUES (
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1900, -- 7 to 8
	2000,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1915, -- 7 to 8
	2015,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1930, -- 7 to 8
	2030,
	now(),
	now()
),(
	nextval('seating_inventory_id_seq'),
	1,
	4,
	MAKE_DATE(2025,12,3),
	1945, -- 7 to 8
	2045,
	now(),
	now()
);
