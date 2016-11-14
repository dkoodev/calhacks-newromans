
import requests
import json
import csv
import time
import sys, json
import urllib3
import certifi
import urllib3.contrib.pyopenssl
urllib3.contrib.pyopenssl.inject_into_urllib3()
http = urllib3.PoolManager(
	cert_reqs='CERT_REQUIRED',
	ca_certs=certifi.where())
# Load the data that PHP sent us
try:
    data = (sys.argv[1])
except:
    print "ERROR"
    sys.exit(1)

# urllib3.disable_warnings()

# data = "58.278356longsighaoighos=-0.08187541fahiughisdihzo=32.7853183dfhaiusgagajhg=-19.71352814"
cotemps = []
coordinators = []
for i in range(3):
	temp = data[0:7]
	cotemps.insert(i,temp)
	index = data.index('=')
	data = data[(index+1):]
temp = data[0:7]
cotemps.insert(3,temp)
for i in range(4):
	if cotemps[i][0].isdigit():
		coordinators.append(float(cotemps[i]))
	else:
		temp = cotemps[i][1:]
		coordinators.append(0 - float(temp))


destination_lat_input = str(coordinators[0])
print destination_lat_input 

destination_lng_input = str(coordinators[1])
depart_lat_input = str(coordinators[2])
depart_lng_input = str(coordinators[3])

amadeus_string = "https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW&latitude="+ destination_lat_input+"&longitude="+destination_lng_input
amadeus_raw_data = requests.get(amadeus_string)
amadeus_json_data = json.loads(amadeus_raw_data.content)
destination_airport = amadeus_json_data[0]['city']
print destination_airport


amadeus_string = "https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW&latitude="+ depart_lat_input+"&longitude="+depart_lng_input
amadeus_raw_data = requests.get(amadeus_string)
amadeus_json_data = json.loads(amadeus_raw_data.content)
depart_airport = amadeus_json_data[0]['city']
print depart_airport

result = {"destination_airport":destination_airport, "depart_airport" : depart_airport}
# Send it to stdout (to PHP)
# print json.dumps(result)
print result



current_year = time.strftime("%Y")
current_month = time.strftime("%m")
current_year_month = current_year + "-" + current_month

future_year = int(current_year) + 1
future_month = int(current_month) - 1
future_year_month = str(future_year) + "-" + str(future_month)

# print(data[0]['depart_airport'])
# print(data[1]['destination_airport'])

origin = result.get('depart_airport')
print origin

destination = result.get('destination_airport')
print destination

# f2 = open("resources/output2.csv" , "wt")

# try: 
# 	writer = csv.writer(f2)
# 	writer.writerow((origin,destination))
# finally:
# 	f2.close()
departure_date = current_year_month + "--" + future_year_month
# print departure_date
x = "http://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin="+ origin + "&destination="+ destination + "&departure_date=" + departure_date + "&duration=2--3&apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW" 

r = requests.get(x)
datas = json.loads(r.content)
print datas

num_range = len(datas['results'])
departure_date_arr = range(num_range)
price_arr =  range(num_range)
airline_arr = range(num_range)
# data_dict = {}

for x in xrange(0,num_range):
	departure_date_arr.insert(x, datas['results'][x]['departure_date'])
	# print departure_date_arr[x]
	# print ":::"
	price_arr.insert(x,datas['results'][x]['price'])
	# print price_arr[x]
	# print "....."
	airline_arr.insert(x, datas['results'][x]['airline'])
	# print airline_arr[x]
	# print "--------"
	# data_dict= {data['results'][x]['departure_date']:data['results'][x]['price']}

# print(data_dict)
double_list=[]
for x in range(0, num_range):
	double_list.append([departure_date_arr[x],price_arr[x],airline_arr[x]])
double_list = sorted(double_list)

f = open("resources/output.csv" , "wt")

try: 
	writer = csv.writer(f)
	writer.writerow(('Departure Date','Price','Airline'))
	for i in range(num_range):
		writer.writerow((double_list[i][0],double_list[i][1],double_list[i][2]))
finally:
	f.close()



