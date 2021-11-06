import subprocess
import sys
# import database_handler.database_crud
# from models.instance_creator import *
# from api import *



# Help to install packages form python file (this was made to works with replit)
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


# Install every package needed
# Package name should be used
install("neo4j")
install("pytz")
install("dnspython")
install("Flask")
install("Flask-Cors")
# install("py2neo")

# from api import *
# Run the files that make the program works
