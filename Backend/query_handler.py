from database_handler.database_crud import database_crud
from models.instance_creator import *

# Create a new node
def create_node_entity(instance_type, attributes):
	instance = create_instance(instance_type, attributes)
	creation_query = instance.creation_query()
	response = database_crud.query_handler(creation_query, None, None)
	return response

# Create a relation between VOLUNTEER and PROJECT
def create_relation_volunteer_project(volunteer, project):
	query_string_volunteer_project = (" MATCH (v:Volunteer {v_name: $query_Value}) "
	                                  " MATCH (p:Project {p_name: $p_name}) "
	                                  " CREATE(v)-[:works_on]->(p) "
	                                  " RETURN v, p")
	response = database_crud.query_handler(query_string_volunteer_project, volunteer, project)
	return response

# Create a relation between ONG and PROJECT
def create_relation_ong_project(ong, project):
	query_string_ong_project = (" MATCH (o:ONG {o_name: $query_Value}) "
                                " MATCH (p:Project {p_name: $p_name}) "
                                " CREATE(o)-[:develops]->(p) "
                                " RETURN o, p")
	response = database_crud.query_handler(query_string_ong_project, ong, project)
	return response


# For an organization, present its associated projects (name and country where it is developed)
def get_query_1(ong):
	query1 = "MATCH (o:ONG) -[d:develops]-> (p:Project) WHERE o.o_name = $query_Value RETURN p.p_name AS p_name, p.p_country AS p_country"
	response = database_crud.query_handler(query1, ong, None)
	return response

# For a project, submit all project data and the names of the volunteers involved in the project.
def get_query_2(project):
	query2 = "MATCH  (v:Volunteer)- [w:works_on] -> (p:Project) WHERE p.p_name = $query_Value RETURN v.v_name AS v_name, p.p_name AS p_name, p.p_country AS p_country, p.p_reach AS p_reach, p.p_duration AS p_duration"
	response = database_crud.query_handler(query2, project, None)
	return response

# Submit a list of projects (name and country), and the number of volunteers involved in each.
def get_query_3():
	query3 = "MATCH (v:Volunteer)-[w:works_on]->(p:Project) RETURN p.p_name AS p_name, p.p_country AS p_country, count(v) AS count"
	response = database_crud.query_handler(query3, None, None)
	return response

# For a volunteer to show the projects (name, country and target population) in which he/she is participating.
def get_query_4(volunteer):
	query4 = "MATCH (v:Volunteer)-[w:works_on]->(p:Project) WHERE v.v_name = $query_Value RETURN p.p_name AS p_name, p.p_country AS p_country, p.p_reach AS p_reach, v.v_name AS v_name"
	response = database_crud.query_handler(query4, volunteer, None)
	return response

# Present a list of target populations and the number of volunteer projects for each population.
def get_query_5():
	query5 = "MATCH (p:Project) RETURN p.p_reach AS p_reach, count(p.p_reach) AS count"
	response = database_crud.query_handler(query5, None, None)
	return response