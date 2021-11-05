# Superclass that helps to create generic methods that works for every sub-class
class Model:
    def __init__(self, name, country):
        self.name = name
        self.country = country

    def get_data(self):
        attributes = self.get_attributes()
        for attribute in attributes:
            print(attribute)
            if(attribute == None):
                return None
        return attributes

    # Return a creation string
    def creation_query(self):
        creation_query_string = self.get_creation_string()
        return creation_query_string

    