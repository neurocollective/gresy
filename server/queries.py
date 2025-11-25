def get_users_query():
	return ("SELECT * FROM gresy_user;", None)

def get_restaurants_query(city):
	query = "SELECT * FROM restaurant r where r.city_id = :city;"
	return (query, { "city": city})
