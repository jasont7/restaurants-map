var map;
var markersArray = [];
var categories = [];
var cat = '"' + getQueryVariable("category") + '"';

var cities = {"Victoria": {lat: 48.428421, lng: -123.365644},
              "Oak Bay": {lat: 48.426141, lng: -123.316516}};
var city = getQueryVariable("city");

var radius = 1000;
var defaultZoom = 16;

function initMap() {
    // Create a map object and specify the Div element to display it on
    loc = new google.maps.LatLng(cities[city].lat, cities[city].lng);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: defaultZoom,
        disableDefaultUI: true,
        styles: mapStyle
    });

    //Put marker at user location or where they've clicked
    var userMarker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: {
            url: 'images/usermarker.png',
            scaledSize: new google.maps.Size(20, 20)
        },
        optimized: false
    });
	

    // Displays all of the markers when page loads, no category filter
    getXMLData('getData.php?cat='+cat, map);

    // Get all of the categories and put them into an array
    getCategories('getCategories.php');

    var filtersPanel = document.getElementById('filtersPanel');
    var textField1 = document.getElementById('userInput');
    var textField2 = document.getElementById('cityInput');
    var slider = document.getElementById("distRange");
    var rangeSize = document.getElementById("rangeSize");

    // Put values from landing page into map search bars
    var tfCat = cat.replace(/['"]+/g, '');
    for (var i=0; i < tfCat.length; i++) {
        if (tfCat[i] == "%") {
            var del = tfCat.substring(i, tfCat.length);
            tfCat = tfCat.replace(del, "");
        }
    }
    textField1.value = tfCat;
	textField2.value = city;

    // Clears and displays new markers according the value the user is typing (cat)
    function useValue() {
        clearMarkers();

        cat = '"'+textField1.value+'"';
        for (var i=0; i < cat.length; i++) {
            if (cat[i] == "&" || cat[i] == ",") {
                var del = cat.substring(i, cat.length-1);
                cat = cat.replace(del, "");
            }
        }

        getXMLData('getData.php?cat='+cat, map);
    }

    // Category search
    textField1.oninput = useValue;
    textField1.addEventListener("awesomplete-selectcomplete", useValue);

    // Clears and displays new markers in the city the user typed
    function changeCity() {
        newCity = textField2.value;
        latitude = cities[newCity].lat;
        longitude = cities[newCity].lng;
        newCenter = new google.maps.LatLng(latitude, longitude);

        map.setCenter(newCenter);
        userMarker.setPosition(newCenter);
        loc = newCenter;

        clearMarkers();
        getXMLData('getData.php?cat='+cat, map);
    }

    // City search
    textField2.onchange = changeCity;
    textField2.addEventListener("awesomplete-selectcomplete", changeCity);

    // On map click
    google.maps.event.addListener(map, 'click', function(event) {
        latitude = event.latLng.lat();
        longitude =  event.latLng.lng();
        newCenter = new google.maps.LatLng(latitude, longitude);

        map.setCenter(newCenter);
        userMarker.setPosition(newCenter);
        loc = newCenter;

        clearMarkers();
        getXMLData('getData.php?cat='+cat, map);
    });

    // Distance range slider
    rangeSize.innerHTML = "1km";
    slider.oninput = function() {
        if (parseInt(this.value) == 1) {
            rangeSize.innerHTML = "250m";
            radius = 250;
            map.setZoom(defaultZoom+2);
        } else if (parseInt(this.value) == 2) {
            rangeSize.innerHTML = "500m";
            radius = 500;
            map.setZoom(defaultZoom+1);
        } else if (parseInt(this.value) == 3) {
            rangeSize.innerHTML = "1km";
            radius = 1000;
            map.setZoom(defaultZoom);
        } else if (parseInt(this.value) == 4) {
            rangeSize.innerHTML = "2km";
            radius = 2000;
            map.setZoom(defaultZoom-1);
        } else if (parseInt(this.value) == 5) {
            rangeSize.innerHTML = "5km";
            radius = 5000;
            map.setZoom(defaultZoom-2);
        }

        clearMarkers();
        getXMLData('getData.php?cat='+cat, map);
    }


    var autocomplete = new Awesomplete(textField1, { // Category
        list: categories,
        //filter: Awesomplete.FILTER_STARTSWITH,
        minChars: 1
    });

    var autocomplete = new Awesomplete(textField2, { // City
        list: Object.keys(cities),
        filter: Awesomplete.FILTER_STARTSWITH,
        minChars: 1
    });

    // Displays the filters panel in the top-left of the screen
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(filtersPanel);
}


function clearMarkers() {

    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}


function getXMLData(url, map) {
    // Using AJAX to get the XML data from the 'getData.php' file and display markers with info-boxes on the map

    var request = new XMLHttpRequest;
    request.open('GET', url); // initialize the request for the XML

    request.onreadystatechange = function() { // when the request changes state
        if (request.readyState == 4) { // success, we have recieved the XML object from sending the request

            // using the info from the XML
            var xml = request.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            
            Array.prototype.forEach.call(markers, function(markerElem) { // looping through each element

                var id = markerElem.getAttribute('id');
                var name = markerElem.getAttribute('name');
                var cat = markerElem.getAttribute('cat');
                var address = markerElem.getAttribute('address');
                var reviews = markerElem.getAttribute('reviews');
                var rating = markerElem.getAttribute('rating');
				var link = markerElem.getAttribute('link');
				var image = markerElem.getAttribute('image');
                var coord = new google.maps.LatLng(
                    parseFloat(markerElem.getAttribute('lat')),
                    parseFloat(markerElem.getAttribute('lng'))
                );
                var distanceToCenter = google.maps.geometry.spherical.computeDistanceBetween(coord, map.getCenter());
    
                if (distanceToCenter <= radius) {

                    // create the marker on its according position if it is within radius
                    var marker = new google.maps.Marker({
                        map: map,
                        position: coord,
                        icon: {
                            url: 'images/markericon.png',
                            scaledSize: new google.maps.Size(20, 20)
                        },
                        optimized: false
                    });

                    // change the opacity of the markers according to rating
                    if (rating >= 4) {
                        marker.setOpacity(1.0);
                    } else if (rating >= 2.5 && rating < 4) {
                        marker.setOpacity(0.8);
                    } else if (rating < 2.5) {
                        marker.setOpacity(0.6);
                    }

                    // creating info-box
                    var markerInfo = 
                        '<div id="markerInfo">' +
							'<span id ="otherStuff">' + 
                            '<h3> <a href ="' + link + '">' + name + '</a> </h3>' +
                            '<img src="images/yelpstars/regular_' + rating + '.png" />' +
                            '<span id="reviews">' + reviews + " reviews" + '</span><br>' +
                            '<p id="categories">' + cat + '</p>' +
                            '<p id="address">' + address + '</p>' +
							'</span>' +
							'<img id="rImage" src ="' + image + '"/>' + 
                        '</div>';

                    // showing and hiding the info window
                    infoWindow = new google.maps.InfoWindow;
                    marker.addListener('click', function() {
                        infoWindow.setContent(markerInfo);
                        infoWindow.open(map, marker);
                    });
                    marker.addListener('mouseover', function() {
                        infoWindow.setContent(markerInfo);
                        infoWindow.open(map, marker);
                    });
					
					 marker.addListener('click', function() {
						map.setZoom(18);
						map.setCenter(marker.getPosition());
					});
		

                    markersArray.push(marker);
                }
            });

            // shows number of results/markers
            var numMarkers = markersArray.length;
            document.getElementById("numResults").innerHTML = numMarkers + " results";
        }
    };
    request.send(); // send the request

}

function getCategories(url) {
    // Using AJAX to get the XML data from the 'getCategories.php' file to make the autocomplete search feature
    // (very similar to the getXMLData function)

    var request = new XMLHttpRequest;

    request.onreadystatechange = function() {
        if (request.readyState == 4) {

            // using the info from the XML
            var xml = request.responseXML;
            var xmlCats = xml.documentElement.getElementsByTagName('category');

            for (i=0; i < xmlCats.length; i++) {
                var cat = xmlCats[i].getAttribute('cat');
                categories.push(cat);
            }
        }
    }
    request.open('GET', url);
    request.send();

}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	
	for (var i=0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			pair[1] = pair[1].replace("+", " ");
			return pair[1];
		}
	}
	return(false);
}
