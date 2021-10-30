class Model:
    def __init__(self, name, country):
        self.name = name
        self.country = country

    def get_data(self):
        attributes = [self.name, self.country, self.reach, self.duration]
        for attribute in attributes:
            print(attribute)
            if(attribute == None):
                return None
        return attributes

    