import os
from neo4j import GraphDatabase, WRITE_ACCESS


connection_string = os.environ['CONNECTION_STRING']
user = os.environ['USERNAME']
password = os.environ['PASSWORD']

# Create a connection between server and API, handle queries and return fetched data from DB server
class DriverLifecycleCRUD:
    def __init__(self, uri, auth):
        self.driver = GraphDatabase.driver(uri, auth = auth)

    # Close connection between server an API
    def close(self):
        self.driver.close()

    def create_relation(self, query_string, name, project_name):
        try:
            # session = self.driver.session()
            session = self.driver.session(default_access_mode = WRITE_ACCESS)
            result = session.run(query_string, name = name, project_name = project_name)
            session.close()
            self.driver.close()
            return True
        except NameError:
            return NameError
    # Get a query string and value to make search queries
    # Return a list with fetched data
    def search_query_handler(self, query_string, query_Value):
        try:
            nodes = []
            session = self.driver.session(default_access_mode = WRITE_ACCESS)
            result = session.run(query_string, name = query_Value)
            for item in result:
                nodes.append(item)
            session.close()
            self.driver.close()
            return nodes
        except (error):
            return error

# Para una organización, presentar los proyectos que tiene asociados (nombre y país donde se desarrolla)
# query1 = "MATCH (o:ONG) -[d:develops]-> (p:Project) WHERE o.name = $name RETURN p.name, p.country"

# Para un proyecto, presentar todos datos del proyecto y el nombre de los voluntarios que participan en él.
# query2 = "MATCH  (v:Volunteer)- [w:works_on] -> (p:Project) WHERE p.name = $name RETURN v.name, p.name, p.country, p.reach, p.duration"

# Presentar una lista de los proyectos (nombre y país), y la cantidad de voluntarios que participa en cada uno.
# query3 = "MATCH (v:Volunteer)-[w:works_on]->(p:Project) RETURN p.name, p.country, count(v)"

# Para un voluntario mostrar los proyectos (nombre, país y población meta) en los que está participando.
# query4 = "MATCH (v:Volunteer)-[w:works_on]->(p:Project) WHERE v.name = $name RETURN p.name, p.country, p.reach, v.name"

# Presentar una lista de las poblaciones meta y la cantidad de proyectos de voluntariado para cada población.
# query5 = "MATCH (p:Project) RETURN p.reach, count(p.reach)"

# QUERIES
# test = DriverLifecycleCRUD(connection_string, (user, password))
# print(test.query_handler(query1, "Beast Philanthropy"))
# print(test.query_handler(query2, "HopeForPawns"))
# print(test.query_handler(query3, None))
# print(test.query_handler(query4, "Allan Calderon"))
# print(test.query_handler(query5, None))

# RELATION https://neo4j.com/docs/api/python-driver/current/
# def create_friend_of(tx, name, friend):
#     tx.run("MATCH (a:Person) WHERE a.name = $name CREATE (a)-[:KNOWS]->(:Person {name: $friend})", name=name, friend=friend)

# ADD DATA https://neo4j.com/docs/api/python-driver/current/
#  def _create_and_return_friendship(tx, person1_name, person2_name):

#         # To learn more about the Cypher syntax,
#         # see https://neo4j.com/docs/cypher-manual/current/

#         # The Reference Card is also a good resource for keywords,
#         # see https://neo4j.com/docs/cypher-refcard/current/

#         query = (
#             "CREATE (p1:Person { name: $person1_name }) "
#             "CREATE (p2:Person { name: $person2_name }) "
#             "CREATE (p1)-[:KNOWS]->(p2) "
#             "RETURN p1, p2"
#         )
#         result = tx.run(query, person1_name=person1_name, person2_name=person2_name)





        # def create_relation(self, query_string, name, project_name):
        #     try:
        #         # query_string_volunteer_project = ("MATCH (v:Volunteer {name: $name}) "
        #                                           # "MATCH (p:Project {name = $project_name}) "
        #                                           # "CREATE (v)-[:works_on]->(p)")
        #         session = self.driver.session(default_access_mode = WRITE_ACCESS)
        #         result = session.run(query_string, name = name, project_name = project_name)
        #         session.close()
        #         self.driver.close()
        #         return True
        #     except (error):
        #         return error

# test = DriverLifecycleCRUD(connection_string, (user, password))
# query_string_volunteer_project = ("""
# MATCH (v:Volunteer),(p:Project) WHERE v.name = $name p.name = $project_name CREATE(v)-[:works_on]->(p)""")
# # MATCH (v:Volunteer)-[w:works_on]->(p:Project) WHERE v.name = $name RETURN p.name, p.country, p.reach, v.name"
# test.create_relation(query_string_volunteer_project, "Ronny Santamaria", "HAE")