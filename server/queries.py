# TODO -wrap in `text()` before returning?

def get_users_query():
	return ("SELECT * FROM gresy_user;", None)

def get_restaurants_query(city):
	query = "SELECT * FROM restaurant r where r.city_id = :city;"
	return (query, { "city": city})

def get_date_components(date_string):
	components = date_string.split('-')

	if len(components) < 3:
		raise Exception('invalid date_string !')

	return tuple(components)

# make_date ( year int, month int, day int ) → date
def get_inventory_query(restaurant_id, guests_count, date, time):

	year, month, day = get_date_components(date)

	query = """
		SELECT sr.id, ir.id as inventory_id
		FROM seating_inventory sr
		JOIN inventory_reservation ir
		ON ir.seating_inventory_id = sr.id
		WHERE sr.restaurant_id = :restaurant_id
		AND sr.seat_count > :guests_count
		AND sr.date = MAKE_DATE(:year, :month, :day)
		AND time = :time
		AND inventory_id is NULL;
	"""

	params = {
		"restaurant_id": restaurant_id,
		"guests": guests,
		"year": year,
		"month": month,
		"day": day,
		"time": time
	}

	return (query, params)
