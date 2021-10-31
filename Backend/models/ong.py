from models.model import *

class Ong(Model):
    def __init__(self, name, country):
        Model.__init__(self, name, country)
    
    # Returns isntance attribute values
    def get_attributes(self):
        return [self.name, self.country]

    # Returns query string with all attributes needed
    def get_creation_string(self):
        attributes = self.get_attributes()
        return "CREATE (o:ONG {o_name: '" + attributes[0] + "', o_country: '" + attributes[1] + "'})"
        