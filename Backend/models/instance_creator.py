from models.ong import *
from models.project import *
from models.volunteer import *

def create_instance(type, attributes):
    try:
        if (type.lower() == "ong"):
            ong = Ong(attributes[0], attributes[1])
            return ong
        elif (type.lower() == "volunteer"):
            volunteer = volunteer(attributes[0], attributes[1], attributes[2])
            return volunteer
        elif (type.lower() == "project"):
            project = Project(attributes[0], attributes[1], attributes[2], attributes[3])
            return project
        else:
          return None
    except error:
        return error