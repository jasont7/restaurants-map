var map;
var markersArray = [];
var categories = [];

function initMap() {
    // Create a map object and specify the Div element to display it on
    victoria = {lat: 48.428421, lng: -123.365644};
    map = new google.maps.Map(document.getElementById('map'), {
        center: victoria,
        zoom: 14,
        disableDefaultUI: true
    });

    // Displays all of the markers when page loads, no category filter
    getXMLData('getData.php?cat=""', map);

    // Get all of the categories and put them into an array
    getCategories('getCategories.php');

    var filtersPanel = document.getElementById('filtersPanel');
    var textField1 = document.getElementById('userInput');

    // Displays the markers according the value the user is typing (cat)
    function useValue() {
        clearMarkers();

        var textFieldVal = '"'+textField1.value+'"';

        var cat = encodeURIComponent(textFieldVal);
        getXMLData('getData.php?cat='+cat, map);
    }

    // Text box event handlers
    textField1.oninput = useValue;
    textField1.onchange = useValue;
    textField1.addEventListener("awesomplete-selectcomplete", useValue);

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
    // Clears the markers from the map and array
    
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
            var numMarkers = markers.length;

            // shows number of results/markers
            document.getElementById("numResults").innerHTML = numMarkers + " results";
            
            Array.prototype.forEach.call(markers, function(markerElem) { // looping through each element

                var id = markerElem.getAttribute('id');
                var name = markerElem.getAttribute('name');
                var cat = markerElem.getAttribute('cat');
                var address = markerElem.getAttribute('address');
                var reviews = markerElem.getAttribute('reviews');
                var rating = markerElem.getAttribute('rating');

                var point ={lat: parseFloat(markerElem.getAttribute('lat')),
                            lng: parseFloat(markerElem.getAttribute('lng'))};
    
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
    
                // create the marker on its according position and append into array
                var marker = new google.maps.Marker({
                    map: map,
                    position: point
                });
                
                // change the opacity of the markers according to rating
                if (rating >= 4) {
					marker.setOpacity(1.0);
				} else if (rating >= 2.5 && rating < 4) {
					marker.setOpacity(0.8);
				} else if (rating < 2.5) {
					marker.setOpacity(0.6);
				}
                
                markersArray.push(marker);

                // set the info-box to the marker on click
                infoWindow = new google.maps.InfoWindow;
                marker.addListener('click', function() {
                    infoWindow.setContent(markerInfo);
                    infoWindow.open(map, marker);
                });
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
                console.log(cat);
                categories.push(cat);
            }
        }
    }
    request.open('GET', url);
    request.send();

}
