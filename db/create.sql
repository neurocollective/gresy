CREATE TABLE gresy_user (
	id int PRIMARY KEY serial,
	email text NOT NULL,
	password_hash text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE city (
	id int PRRIMARY KEY,
	name text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
)

CREATE TABLE restaurant (
	id int PRIMARY KEY serial,
	name text NOT NULL,
	address text NOT NULL,
	city_id int REFERENCES city(id) NOT NULL,
	secondary_city_id REFERENCES city(id),
	created_date timestamp NOT NULLdefault now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE seating_inventory (
	id int PRIMARY KEY serial,
	restaurant_id int NOT NULL REFERENCES restaurant(id),
	seat_count int NOT NULL,
	quantity int NOT NULL,
	begin_time timestamp NOT NULL,
	end_time timestamp NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE inventory_reservation (
	id int PRIMARY KEY serial,
	seating_inventory_id int NOT NULL REFERENCES seating_inventory(id),
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);