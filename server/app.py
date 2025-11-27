from flask import Flask, render_template, request
import sqlalchemy
from sqlalchemy import create_engine, text
from queries import *

app = Flask(__name__)

engine = create_engine("postgresql://postgres:postgres@localhost:5432/postgres")

connection = engine.connect()

@app.route("/users")
def get_users():
    query_text = get_users_query()
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

    print('get_inventory params:',restaurant_id, guests, date, time)

    start_time = None
    end_time = None
    if time == "*":
        start_time = 0
        end_time = 2400 
    else:
        start_time = int(time) - 200
        end_time = int(time) + 300

    query_text, query_params = get_inventory_query(restaurant_id, guests, date, start_time, end_time)
    rows = connection.execute(text(query_text), query_params)

    all_dict_rows = []

    for row in rows:
        all_dict_rows.append({
            "inventory_id": row[0],
            "seatCount": row[1],
            "beginTime": row[2]
        })

    return all_dict_rows

@app.route("/inventory", methods=['POST'])
def reserve_inventory():

    print(request.json)

    query_text, query_params = get_reserve_query(request.json)

    print(query_text, query_params)

    rows = connection.execute(text(query_text), query_params)

    print('affected rows:', rows.rowcount)

    return { "message": "reserved successfully" }

@app.route("/restaurants/<city>")
def get_restaurants(city):

    query_text, query_params = get_restaurants_query(city)
    rows = connection.execute(text(query_text), query_params)

    all_dict_rows = []

    for row in rows:
        all_dict_rows.append({ "id": row[0], "name": row[1] })

    return all_dict_rows

@app.route("/")
def hello(name=None):
    return render_template('index.html')
