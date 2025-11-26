from flask import Flask, render_template
import sqlalchemy
from sqlalchemy import create_engine, text
from queries import *

app = Flask(__name__)

engine = create_engine("postgresql://postgres:postgres@localhost:5432/postgres")

connection = engine.connect()

@app.route("/users")
def get_users():
    users_query = get_users_query()
    query_text = users_query[0]
    rows = connection.execute(text(query_text))

    all_dict_rows = []

    for row in rows:
        # mapping = row._mapping
        # print(mapping)
        # all_dict_rows.append(mapping)
        all_dict_rows.append({ "email": row[1] })

    return all_dict_rows

@app.route("/inventory/<restaurant_id>/<guests>/<date>/<time>")
def get_inventory(restaurant_id, guests, date, time):
    users_query = get_inventory_query(restaurant_id, guests, date, time)
    query_text = users_query[0]
    query_params = users_query[1]
    rows = connection.execute(text(query_text), query_params)

    all_dict_rows = []

    for row in rows:
        all_dict_rows.append({ "email": row[1] })

    return all_dict_rows

@app.route("/restaurants/<city>")
def get_restaurants(city):
    users_query = get_restaurants_query(city)
    query_text = users_query[0]
    query_params = users_query[1]
    rows = connection.execute(text(query_text), query_params)

    all_dict_rows = []

    for row in rows:
        all_dict_rows.append({ "email": row[1] })

    return all_dict_rows

@app.route("/message")
def message():
    return { "message": "duder" }

@app.route("/")
def hello(name=None):
    return render_template('index.html')
