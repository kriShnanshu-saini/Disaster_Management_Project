from flask import Flask, render_template, jsonify
import mysql.connector
import json

app = Flask(__name__)

# Database configuration
host = "127.0.0.1"
user = "root"
password = "m0u0nikuhu"
database = "project"

try:
    connection = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )
    if connection.is_connected():
        print("Connected to MySQL database")
except mysql.connector.Error as error:
    print("Error connecting to MySQL:", error)

def execute_query_and_display(query):
    cursor = connection.cursor()
    cursor.execute(query)
    result = cursor.fetchall()

    if result:
        # Create a list of dictionaries for the data
        data = []
        column_names = [i[0] for i in cursor.description]

        for row in result:
            data.append(dict(zip(column_names, row)))

        # Convert the data to JSON
        json_data = json.dumps(data)
        return json_data
    else:
        return jsonify({"message": "No records found."})
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/request_view')
def request_view():
    query = "SELECT * FROM request"
    table_html = execute_query_and_display(query)
    return render_template('request_view.html', table_html=table_html)

@app.route('/request_json')
def request_json():
    query = "SELECT * FROM request"
    cursor = connection.cursor()
    cursor.execute(query)
    result = cursor.fetchall()

    if result:
        data = []
        column_names = [i[0] for i in cursor.description]

        for row in result:
            data.append(dict(zip(column_names, row)))

        json_data = json.dumps(data)
        return json_data
    else:
        return jsonify({"message": "No records found."})

if __name__ == '__main__':
    app.run(debug=True)
