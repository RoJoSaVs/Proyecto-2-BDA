from models.model import *

class Ong(Model):
    def __init__(self, name, country):
        Model.__init__(self, name, country)
  
    def get_data(self):
      return [self.name, self.country]
        