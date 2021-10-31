from  models.model import *

class Volunteer(Model):
    def __init__(self, name, age, country):
        self.age = age
        Model.__init__(self, name, country)

    # Returns isntance attribute values
    def get_attributes(self):
        attributes = [self.name, self.age, self.country]
        return attributes

    # Returns query string with all attributes needed
    def get_creation_string(self):
        attributes = self.get_attributes()
        return "CREATE (v:Volunteer {v_name: '" + attributes[0] + "', v_country: '" + attributes[2] + "', v_age: " + str(attributes[1]) + "})"