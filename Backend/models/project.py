from  models.model import *

class Project(Model):
    def __init__(self, name, country, reach, duration):
        # self.name = name
        # self.country = country
        self.reach = reach
        self.duration = duration
        Model.__init__(self, name, country)

    # def get_data(self):
    #     attributes = [self.name, self.country, self.reach, self.duration]
    #     return attributes
