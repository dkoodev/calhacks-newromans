import requests, json, time, csv


#Go0GWAmeIiqP96f0nSh3TAXP3enAA53g

current_year = time.strftime("%Y")
current_month = time.strftime("%m")
current_year_month = current_year + "-" + current_month



print (current_year_month)
print (current_year_month)
# print(future_year_month)

# origin = "NYC"
# destination = "LAS"
# departure_date = current_year_month + "--" + future_year_month
# print departure_date
x = "https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=Go0GWAmeIiqP96f0nSh3TAXP3enAA53g&city_name=Tel%20Aviv"

#print (current_year_month)
r = requests.get(x)
data = json.loads(r.content)
# print data

# THESE ARE THE ARRAYS THAT YOU NEED
num_range = len(data['points_of_interest'])
attractions = range(num_range) #NAMES OF THE ATTRACTION
description = range(num_range) #DESCRIPTIONS OF THE ATTRACTION
pictures = range(num_range) #9 INSTAGRAM PHOTOS
grade = range(num_range) # DON'T NEED THIS

# pictures2d = range(num_range)
# index = range(num_range)
# full_attract = []
# #price_arr =  range(num_range)
# #airline_arr = range(num_range)
# # data_dict = {}

for x in xrange(0,3):
	# pictures.insert(x, data['points_of_interest'][x]['main_image'])
	attractions.insert(x, data['points_of_interest'][x]['title'])
	grade.insert(x, data['points_of_interest'][x]['grades']['city_grade'])
	description.insert(x, data['points_of_interest'][x]['details']['description'])
	# print pictures[x]
	# print attractions[x]
	# print grade[x]
	# print description[x]

# full_attract = []
# for x in range(0, 3):
# 	full_attract.append([attractions[x],description[x],pictures[x]])
# 	print full_attract[x]

for x in xrange(0, num_range):
	pictures.insert(x, data['points_of_interest'][x]['main_image'])
	print pictures[x]

	# for y in range(3)
	# 	pictures2d[x].insert(data['points_of_interest'][x]['contexual_images']['medium'][y]['url'])
	# 	print pictures2d[x][y]
	

double_list = [] # 2D ARRAY WITH ATTRACTION NAME AND DESCRIPTION
for x in range(0, num_range):
	double_list.append([attractions[x],description[x]])
	print double_list[x]

json.dumps(double_list) #PASSES TO PHP (SUPPOSEDLY)
json.dumps(pictures)
# double_list = sorted(double_list, reverse = True)

# print double_list

# # f = open("resources/output.csv" , "wt")
# for x in xrange(3):
# 	full_attract.append([attractions[index[x]], description[index[x]],pictures[index[x]]])




	# pictures.insert(x, data['points_of_interest'][double_list[x][1]]['main_image'])
	# attractions.insert(x, data['points_of_interest'][double_list[x][1]]['title'])
	# description.insert(x, data['points_of_interest'][double_list[x][1]]['description'])

	#grade.insert(x, data['points_of_interest'][x]['city_grade'])
# try: 
# 	writer = csv.writer(f)
# 	writer.writerow(('Departure Date','Price'))
# 	for i in range(num_range):
# 		writer.writerow((double_list[i][0],double_list[i][1]))
# finally:
# 	f.close()