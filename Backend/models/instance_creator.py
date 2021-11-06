from models.ong import *
from models.project import *
from models.volunteer import *
import json
import sys


# Receives a type of class string and its attributes and returns an instance of that type with those attributes
def create_instance(type, attributes):
    try:
        if (type.lower() == "ong"):
            ong = Ong(attributes[0], attributes[1])
            return ong
        elif (type.lower() == "volunteer"):
            volunteer = Volunteer(attributes[0], attributes[1], attributes[2])
            return volunteer
        elif (type.lower() == "project"):
            project = Project(attributes[0], attributes[1], attributes[2], attributes[3])
            return project
        else:
          return None
    except NameError:
        return None


def json_creation_parse(instance_type, json_string):
    attributes = []
    # print(json_string, file=sys.stderr)
    if (instance_type.lower() == "ong"):
        attributes.append(json_string['name'])
        attributes.append(json_string['country'])
    elif (instance_type.lower() == "volunteer"):
        attributes.append(json_string['name'])
        attributes.append(json_string['age'])
        attributes.append(json_string['country'])
    elif (instance_type.lower() == "project"):
        attributes.append(json_string['name'])
        attributes.append(json_string['country'])
        attributes.append(json_string['reach'])
        attributes.append(json_string['duration'])
    return attributes


# def json_relation_ong_parse():
# def json_relation_volunteer_parse():