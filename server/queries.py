def get_date_components(date_string):
	components = date_string.split('-')

	if len(components) < 3:
		raise Exception('invalid date_string !')

	return tuple(components)

def get_users_query():
	return ("SELECT * FROM gresy_user;", None)

def get_restaurants_query(city):
	query = "SELECT id, name, image_url FROM restaurant r where r.city_id = :city;"
	return (query, { "city": city })

# make_date ( year int, month int, day int ) → date
def get_inventory_query(restaurant_id, guests_count, date, start, end):

	print('args:',restaurant_id, guests_count, date, start, end)

	year, month, day = get_date_components(date)

	query = """
		SELECT sr.id, sr.seat_count, sr.begin_time
		FROM seating_inventory sr
		LEFT JOIN inventory_reservation ir
		ON ir.seating_inventory_id = sr.id
		WHERE sr.restaurant_id = :restaurant_id
		AND sr.seat_count >= :guests_count
		AND sr.day = MAKE_DATE(:year, :month, :day)
		AND (sr.begin_time >= :start AND sr.begin_time <= :end)
		AND ir.id is NULL
		ORDER BY sr.begin_time ASC;
	"""

	params = {
		"restaurant_id": restaurant_id,
		"guests_count": guests_count,
		"year": year,
		"month": month,
		"day": day,
		"start": start,
		"end": end
	}

	return (query, params)

def get_reserve_query(payload_dict):

	inventory_id = payload_dict["inventory_id"]
	user_id = payload_dict.get("user_id", 1)

	query = """
		INSERT INTO inventory_reservation VALUES (
			nextval('inventory_reservation_id_seq'),
			:user_id,
			:inventory_id,
			now(),
			now()
		) RETURNING id;
	"""

	params = {
		"inventory_id": inventory_id,
		"user_id": user_id
	}

	return (query, params)

def get_create_restaurant_query(payload_dict):

	name = payload_dict["name"]
	city_id = payload_dict["city_id"]
	address = payload_dict["address"]

	query = """
		INSERT INTO restaurant VALUES (
			nextval('restaurant_id_seq'),
			:name,
			:address,
			:city_id,
			NULL,
			NULL,
			NULL,
			now(),
			now()
		) RETURNING id;
	"""

	params = {
		"name": name,
		"city_id": city_id,
		"address": address
	}

	return (query, params)
