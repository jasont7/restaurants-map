
# coding: utf-8

# In[211]:

import googlemaps
gmaps = googlemaps.Client(key='AIzaSyAQ3QulDwae740d738AFGaAM70Ikel-HPg')

from urllib.request import urlopen
from bs4 import BeautifulSoup

import time


# In[214]:

def getLat(geocode):
    return geocode[0]['geometry']['location']['lat']

def getLng(geocode):
    return geocode[0]['geometry']['location']['lng']


# In[204]:

def scrapePage(quote_page):
    page = urlopen(quote_page)
    soup = BeautifulSoup(page, 'html.parser')
    
    info_list = []

    # each search box
    for elem in soup.find_all('li', attrs={'class': 'regular-search-result'}):
        try:
            element = {}

            # get name
            for n in elem.find_all('a', attrs={'class': 'biz-name js-analytics-click'}):
                for span in n.find_all('span'):
                    element['name'] = span.text

            # get review
            for rev in elem.find_all('span', attrs={'class': 'review-count rating-qualifier'}):
                element['review'] = rev.text[13:-6]

            # get rating
            for rt in elem.find_all('div', attrs={'class': 'biz-rating biz-rating-large clearfix'}):
                for img in rt.find_all('img'):
                    element['rating'] = img.get('alt')

            # get types of food
            for f in elem.find_all('span', attrs={'class': 'category-str-list'}):
                tmp = []
                for a in f.find_all('a'):
                    tmp.append(a.text)
                element['types'] = tmp

            # get the address
            for a in elem.find_all('address'):
                for br in a.find_all("br"):
                    br.replace_with(", ")
                element['address'] = a.text[9:-13]

                # get geocode
                geocode_result = gmaps.geocode(element['address'])
                element['lat'] = getLat(geocode_result)
                element['lon'] = getLng(geocode_result)

            info_list.append(element)
            print(element)
        except AttributeError:
            pass

    return info_list


# In[215]:

# Scraping data from Yelp webpage

quote_page = 'https://www.yelp.ca/search?find_desc=Restaurants&find_loc=Victoria,+BC&l=g:-123.28857421875,48.46608091026394,-123.39157104492188,48.39774153971361&start='
new_page = ''
start = 0
big_list = []
while (True):
    new_page = quote_page + str(start)
    page = scrapePage(new_page)
    
    if (len(page) == 0):
        break
    
    big_list.extend(page)
    
    print("Page: " + str(start // 10 + 1))
    start += 10
    time.sleep(15)


# In[255]:

#Saving all of the data onto disc

import pickle

pickle_out = open("restaurants.pickle","wb")
pickle.dump(big_list, pickle_out)
pickle_out.close()


# In[254]:

# Putting all data into MySQL db

import mysql.connector as mysql

cnx = mysql.connect(user='root', database='webapp1')
cursor = cnx.cursor()

insert_elem = "INSERT INTO restaurants (`id`, `name`, `reviews`, `rating`, `address`, `latitude`, `longitude`) VALUES (%s, %s, %s, %s, %s, %s, %s);"
insert_type = "INSERT INTO categories (id, cat) VALUES (%s, %s);"

ID = 1
for i in big_list:
    #checks if there is elements without address
    if 'address' not in i:
        continue
    
    #the data tuple to combine with the insert statement
    try:
        i_data = (ID, i['name'], i['review'], i['rating'], i['address'], i['lat'], i['lon'])
    except KeyError:
        i_data = (ID, i['name'], '0', '0', i['address'], i['lat'], i['lon'])
    
    #excecuting the combined query
    try:
        cursor.execute(insert_elem, i_data)
    except mysql.IntegrityError:
        pass
    
    #inserting data into the restaurant categories table
    for t in i['types']:
        t_data = (ID, t)
        cursor.execute(insert_type, t_data)
    
    ID += 1

cnx.commit() #committing everything to the db

cursor.close()
cnx.close()

