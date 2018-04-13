var map;
var markersArray = [];
var categories = [];
var cat = '"' + '"';
var radius = 1000;
var defaultZoom = 15;

document.addEventListener("DOMContentLoaded", function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(location) {
            userLoc = new google.maps.LatLng(
                location.coords.latitude, location.coords.longitude
            );
        });
    } else {
        console.log("Location services not available");
    }
});

function initMap() {
    // Create a map object and specify the Div element to display it on
    loc = new google.maps.LatLng(48.428421, -123.365644);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: defaultZoom,
        disableDefaultUI: true,
        styles: mapStyle
    });

    //new
    navigator.geolocation.getCurrentPosition(function(location) {
        userLoc = new google.maps.LatLng(
            location.coords.latitude, 
            location.coords.longitude
        );
        map.setCenter(userLoc);
    });

    // Displays all of the markers when page loads, no category filter
    getXMLData('getData.php?cat=""', map);

    // Get all of the categories and put them into an array
    getCategories('getCategories.php');

    var filtersPanel = document.getElementById('filtersPanel');
    var textField1 = document.getElementById('userInput');
    var slider = document.getElementById("distRange");
    var rangeSize = document.getElementById("rangeSize");

    // Displays the markers according the value the user is typing (cat)
    function useValue() {
        clearMarkers();

        cat = '"'+textField1.value+'"';

        getXMLData('getData.php?cat='+cat, map);
    }

    // Event handlers
    textField1.oninput = useValue;
    textField1.addEventListener("awesomplete-selectcomplete", useValue);

    google.maps.event.addListener(map, 'click', function(event) {
        latitude = event.latLng.lat();
        longitude =  event.latLng.lng();
        newCenter = new google.maps.LatLng(latitude, longitude);

        map.setCenter(newCenter);
        loc = newCenter;

        clearMarkers();
        console.log(cat);
        getXMLData('getData.php?cat='+cat, map);
    });

    slider.oninput = function() {
        if (parseInt(this.value) == 1) {
            rangeSize.innerHTML = "100m";
            radius = 100;
            map.setZoom(defaultZoom+3);
        } else if (parseInt(this.value) == 2) {
            rangeSize.innerHTML = "250m";
            radius = 250;
            map.setZoom(defaultZoom+2);
        } else if (parseInt(this.value) == 3) {
            rangeSize.innerHTML = "500m";
            radius = 500;
            map.setZoom(defaultZoom+1);
        } else if (parseInt(this.value) == 4) {
            rangeSize.innerHTML = "1km";
            radius = 1000;
            map.setZoom(defaultZoom);
        } else if (parseInt(this.value) == 5) {
            rangeSize.innerHTML = "2km";
            radius = 2000;
            map.setZoom(defaultZoom-1);
        } else if (parseInt(this.value) == 6) {
            rangeSize.innerHTML = "5km";
            radius = 5000;
            map.setZoom(defaultZoom-2);
        } else if (parseInt(this.value) == 7) {
            rangeSize.innerHTML = "10km";
            radius = 10000;
            map.setZoom(defaultZoom-3);
        }

        clearMarkers();
        getXMLData('getData.php?cat='+cat, map);
    }


    var autocomplete = new Awesomplete(textField1, {
        list: categories,
        filter: Awesomplete.FILTER_STARTSWITH,
        minChars: 1,
        autoFirst: true
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

    var request = new XMLHttpRequest; // the main object to request the XML

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
                    var markerInfo = document.createElement('div');

                    var title = document.createElement('strong'); // name
                    title.textContent = name;
                    var text0 = document.createElement('text'); // categories
                    text0.textContent = cat;
                    var text1 = document.createElement('text'); // address
                    text1.textContent = address;
                    var text2 = document.createElement('text'); // reviews
                    text2.textContent = reviews + " reviews";
                    var text3 = document.createElement('text'); // rating
                    text3.textContent = rating + " stars";

                    // appending the text to the info-box
                    markerInfo.appendChild(title);
                    markerInfo.appendChild(document.createElement('br'));
                    markerInfo.appendChild(text0);
                    markerInfo.appendChild(document.createElement('br'));
                    markerInfo.appendChild(text1);
                    markerInfo.appendChild(document.createElement('br'));
                    markerInfo.appendChild(text2);
                    markerInfo.appendChild(document.createElement('br'));
                    markerInfo.appendChild(text3);

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

                    markersArray.push(marker);
                }

                // shows number of results/markers
                var numMarkers = markersArray.length;
                document.getElementById("numResults").innerHTML = numMarkers + " results";
                
            });
        }
    };
    request.open('GET', url); // initialize the request
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
