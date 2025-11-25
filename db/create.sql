CREATE TABLE gresy_user (
	id serial PRIMARY KEY,
	email text NOT NULL,
	password_hash text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE city (
	id serial PRIMARY KEY,
	name text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE borough (
	id serial PRIMARY KEY,
	city_id int REFERENCES city(id) NOT NULL,
	name text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE neighborhood (
	id serial PRIMARY KEY,
	city_id int REFERENCES city(id) NOT NULL,
	borough_id int REFERENCES borough(id),
	name text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE restaurant (
	id serial PRIMARY KEY,
	name text NOT NULL,
	address text NOT NULL,
	city_id int REFERENCES city(id) NOT NULL,
	borough_id int REFERENCES borough(id),
	neighborhood_id int REFERENCES neighborhood(id),
	secondary_city_id int REFERENCES city(id),
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE seating_inventory (
	id serial PRIMARY KEY,
	restaurant_id int NOT NULL REFERENCES restaurant(id),
	seat_count int NOT NULL,
	quantity int NOT NULL,
	begin_time timestamp NOT NULL,
	end_time timestamp NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE inventory_reservation (
	id serial PRIMARY KEY,
	seating_inventory_id int NOT NULL REFERENCES seating_inventory(id),
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

-- end basic tables

-- end augment tables

CREATE TABLE access_level (
	id serial PRIMARY KEY,
	name text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

CREATE TABLE admin_user (
	id serial PRIMARY KEY,
	email text NOT NULL,
	access_level int REFERENCES access_level(id),
	password_hash text NOT NULL,
	created_date timestamp NOT NULL default now(),
	modified_date timestamp NOT NULL default now()
);

-- end admin tables