from flask import Flask, render_template
import sqlalchemy
from sqlalchemy import create_engine, text

app = Flask(__name__)

engine = create_engine("postgresql://postgres:postgres@localhost:5432/postgres")

connection = engine.connect()

@app.route("/users")
def get_users():
    rows = connection.execute(text("SELECT * FROM gresy_user;"))

    all_dict_rows = []

    for row in rows:
        all_dict_rows.append({ "email": row[1] })

    return all_dict_rows

@app.route("/message")
def message():
    return { "message": "yo"}

@app.route("/")
def hello(name=None):
    return render_template('index.html')
