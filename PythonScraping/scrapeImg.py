import googlemaps
gmaps = googlemaps.Client(key='AIzaSyAQ3QulDwae740d738AFGaAM70Ikel-HPg')

from urllib.request import urlopen
from bs4 import BeautifulSoup

import re

import time


def scrapePage(quote_page):
    page = urlopen(quote_page)
    soup = BeautifulSoup(page, 'html.parser')

    # loops through each restaurant in page. Each restaurant is an element
    for elem in soup.select('.regular-search-result'):
        try:
            element = {}

            # get image
            for img in elem.select(".photo-box-img"):
                element['img'] = img['src']
                break

            # get 'more info' link
            for l in elem.select(".biz-name.js-analytics-click"):
                element['link'] = "https://www.yelp.com" + l['href']
                break
            
            print(element)
            
        except AttributeError: pass


quote_page = 'https://www.yelp.ca/search?find_desc=Restaurants&find_loc=Victoria,+British+Columbia&l=g:-123.26282501220703,48.5020360318228,-123.46881866455078,48.365362186063244&start='
scrapePage(quote_page)
