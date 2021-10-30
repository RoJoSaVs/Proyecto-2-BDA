# import models.model

class Volunteer:
    def __init__(self, name, age, country):
        self.name = name
        self.age = age
        self.country = country

    def get_data(self):
      attributes = [self.name, self.age, self.country]
      return attributes