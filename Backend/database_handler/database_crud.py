import os
from neo4j import GraphDatabase, WRITE_ACCESS


# connection_string = os.environ['CONNECTION_STRING']
# user = os.environ['USERNAME']
# password = os.environ['PASSWORD']


connection_string = "neo4j+s://0ee6a249.databases.neo4j.io"
user = "neo4j"
password = "3YlD9ks7Kz89vXMuvHZMSzzDalwbf8Ek-2dGMYF4pCA"

# Create a connection between server and API, handle queries and return fetched data from DB server
class DriverLifecycleCRUD:
    def __init__(self, uri, auth):
        self.driver = GraphDatabase.driver(uri, auth = auth)


    # Close connection between server an API
    def close(self):
        self.driver.close()


    # Receive a query string and execute it
    # Receive also a parameter to search for data or create relations
    # Return a list with fetched data
    def query_handler(self, query_string, query_Value, p_name):
        try:
            nodes = []
            session = self.driver.session(default_access_mode = WRITE_ACCESS)
            result = session.run(query_string, query_Value = query_Value, p_name = p_name)
            for item in result:
                nodes.append(item.data())
            session.close()
            self.driver.close()
            return nodes
        except NameError:
            return NameError

database_crud = DriverLifecycleCRUD(connection_string, (user, password))