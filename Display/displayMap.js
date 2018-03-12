var map;
var markersArray = [];

function initMap() {
    // Create a map object and specify the Div element to display it on
    victoria = {lat: 48.428421, lng: -123.365644};
    map = new google.maps.Map(document.getElementById('map'), {
        center: victoria,
        zoom: 14,
        disableDefaultUI: true
    });
    getXMLData('getData.php?cat=""', map);

    var filtersPanel = document.getElementById('filtersPanel');

    var textField1 = document.getElementById('userInput');
    function useValue() {
        clearMarkers();

        var cat = encodeURIComponent('"'+textField1.value+'"');
        getXMLData('getData.php?cat='+cat, map);
    }
    textField1.oninput = useValue;

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(filtersPanel);
}

function clearMarkers() {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
}

function getXMLData(url, map) {
    // Using AJAX to get the XML data from the 'getData.php' file and use it
    // to display markers with info-boxes:

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
    
                // create the marker on its according position
                var marker = new google.maps.Marker({
                    map: map,
                    position: point
                });
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