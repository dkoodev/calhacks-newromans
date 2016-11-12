
import requests
import json
import csv


origin = "NYC"
destination = "LAS"
departure_date = "2016-12--2017-01"
x = "http://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin="+ origin + "&destination="+ destination + "&departure_date=" + departure_date + "&duration=2--3&apikey=4wpDaou92avrjAGMVdGDb5Wl5XgGzCGW" 

# url_response = urllib2.urlopen(x)


# print (url_response)


r = requests.get(x)
data = json.loads(r.content)


num_range = len(data['results'])
departure_date_arr = range(num_range)
price_arr =  range(num_range)
airline_arr = range(num_range)

for x in xrange(0,num_range):
	departure_date_arr.insert(x, data['results'][x]['departure_date'])
	print departure_date_arr[x]
	print ":::"
	price_arr.insert(x,data['results'][x]['price'])
	print price_arr[x]
	print "....."
	airline_arr.insert(x, data['results'][x]['airline'])
	print airline_arr[x]
	print "--------"


f = open("resources/output.csv" , "wt")

try: 
	writer = csv.writer(f)
	writer.writerow(('Departure Date','Price'))
	for i in range(num_range):
		writer.writerow((departure_date_arr[i],price_arr[i]))
finally:
	f.close()

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