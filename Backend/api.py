from query_handler import *
import flask
from flask import request, jsonify, g, render_template, abort
from flask_cors import CORS, cross_origin
import json

app = flask.Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/', methods=['GET'])
def home():
    try:
        return jsonify(0)
    except:
        abort(404)


# A route to return all of the available entries in our catalog.
@app.route('/api/employees', methods=['GET'])
def api_all():
    try:
        return jsonify("Hola")
    except:
        abort(404)


@app.route('/api', methods=['POST'])
def add_single_node():
    try:
        data = request.json
        request_value = data['email']
        response = ""
        if (response == None):
            return jsonify("Hola")
        else:
            return jsonify(-1)
    except:
        abort(404)


@app.route('/api/query1', methods=['GET'])
def query1():
    try:
        return jsonify(0)
    except:
        abort(404)


@app.route('/api/query2', methods=['GET'])
def query2():
    try:
        return jsonify(0)
    except:
        abort(404)


@app.route('/api/query3', methods=['GET'])
def query3():
    try:
        return jsonify(get_query_3())
    except:
        abort(404)


@app.route('/api/query4', methods=['GET'])
def query4():
    try:
        return jsonify(get_query_3())
    except:
        abort(404)


@app.route('/api/query5', methods=['GET'])
def query5():
    try:
        return jsonify(get_query_5())
    except:
        abort(404)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

app.run()