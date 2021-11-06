# from main import *
import sys
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
        return render_template('Snake.html')
    except:
        abort(404)


# A route to return all of the available entries in our catalog.
@app.route('/api/employees', methods=['GET'])
def api_all():
    try:
        return jsonify("Hola")
    except:
        abort(404)


# Route to add a new node
@app.route('/api/add', methods=['POST'])
def add_single_node():
    try:
        data = request.json
        print(data, file=sys.stderr)
        node_type = data['type']
        print(node_type, file=sys.stderr)
        attributes = json_creation_parse(node_type, data)
        print("data", file=sys.stderr)
        return jsonify(create_node_entity(node_type, attributes))
    except:
        abort(404)


# Route to create relation between ong and project
@app.route('/api/relation/ong', methods=['POST'])
def relation_ong_project():
    try:
        data = request.json
        ong = data['ong']
        project = data['project']
        return jsonify(create_relation_ong_project(ong, project))
    except:
        abort(404)


# Route to create relation between volunteer and project
@app.route('/api/relation/volunteer', methods=['POST'])
def relation_volunteer_project():
    try:
        data = request.json
        volunteer = data['volunteer']
        project = data['project']
        return jsonify(create_relation_volunteer_project(volunteer, project))
    except:
        abort(404)



@app.route('/api/query1', methods=['GET'])
def query1():
    try:
        request_value = request.args.get('ong')
        return jsonify(get_query_1(request_value))
    except:
        abort(404)


@app.route('/api/query2', methods=['GET'])
def query2():
    try:
        request_value = request.args.get('project')
        return jsonify(get_query_2(request_value))
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
        request_value = request.args.get('volunteer')
        return jsonify(get_query_4(request_value))
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