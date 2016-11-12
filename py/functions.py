
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

current_year = time.strftime("%Y")
current_month = time.strftime("%m")
current_year_month = current_year + "-" + current_month

future_year = int(current_year) + 1
future_month = int(current_month) - 1
future_year_month = str(future_year) + "-" + str(future_month)

# print(data[0]['depart_airport'])
# print(data[1]['destination_airport'])

origin = data[0]['depart_airport']
destination = data[1]['destination_airport']
departure_date = current_year_month + "--" + future_year_month
# print departure_date
x = "http://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin="+ origin + "&destination="+ destination + "&departure_date=" + departure_date + "&duration=2--3&apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW" 
print(x)

r = requests.get(x)
data = json.loads(r.content)


num_range = len(data['results'])
departure_date_arr = range(num_range)
price_arr =  range(num_range)
airline_arr = range(num_range)
# data_dict = {}

for x in xrange(0,num_range):
	departure_date_arr.insert(x, data['results'][x]['departure_date'])
	# print departure_date_arr[x]
	# print ":::"
	price_arr.insert(x,data['results'][x]['price'])
	# print price_arr[x]
	# print "....."
	airline_arr.insert(x, data['results'][x]['airline'])
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




# f = open("resources/output.csv" , "wt")

# try: 
# 	writer = csv.writer(f)
# 	writer.writerow(('Departure Date','Price'))
# 	for i in range(num_range):
# 		writer.writerow((departure_date_arr[i],price_arr[i]))
# finally:
# 	f.close()



# city_name = "Los Angeles"
# x = "https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW&city_name="+ city_name +"&social_media=true HTTP/1.1"
# r = requests.get(x)
# data = json.loads(r.content)

# print r.content



# print data

# from amadeus import Flights

# flights = Flights('4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW')
# resp = flights.extensive_search(
#     origin='NYC',
#     destination='LAS',
#     departure_date='2015-11-25--2015-11-30',
#     duration='4--10')
# print(resp) 