import requests
from pathlib import Path

response = requests.get('https://api.github.com/users/motalebshabbir')
data = response.json()

print(data['name']) 
print(data['public_repos'])
Path.cwd().write_text(str(data))