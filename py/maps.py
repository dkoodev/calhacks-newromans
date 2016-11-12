
import requests
import json
import csv
import time
import sys, json

# Load the data that PHP sent us
try:
    data = json.loads(sys.argv[1])
except:
    print "ERROR"
    sys.exit(1)

destination_lat_input = data[0]
destination_lng_input = data[1]
depart_lat_input = data[2]
depart_lng_input = data[3]

amadeus_string = "https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW&latitude="+ destination_lat_input+"&longitude="+destination_lng_input
amadeus_raw_data = requests.get(amadeus_string)
amadeus_json_data = json.loads(amadeus_raw_data.content)
destination_airport = amadeus_json_data[0]['airport']

amadeus_string = "https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW&latitude="+ depart_lat_input+"&longitude="+depart_lng_input
amadeus_raw_data = requests.get(amadeus_string)
amadeus_json_data = json.loads(amadeus_raw_data.content)
depart_airport = amadeus_json_data[0]['airport']

result = {"destination_airport":destination_airport, "depart_airport" : depart_airport}
# Send it to stdout (to PHP)
print json.dumps(result)