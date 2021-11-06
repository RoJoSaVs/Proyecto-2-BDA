from  models.model import *

class Project(Model):
    def __init__(self, name, country, reach, duration):
        self.reach = reach
        self.duration = duration
        Model.__init__(self, name, country)

    # Returns isntance attribute values
    def get_attributes(self):
        attributes = [self.name, self.country, self.reach, self.duration]
        return attributes

    # Returns query string with all attributes needed
    def get_creation_string(self):
        attributes = self.get_attributes()
        return "CREATE (p:Project {p_name: '" + attributes[0] + "', p_country: '" + attributes[1] + "', p_reach: '" + attributes[2] + "', p_duration: " + str(attributes[3]) + "})"
