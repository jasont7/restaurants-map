function initMap() {
    // Create a map object and specify the Div element to display it on
    victoria = {lat: 48.428421, lng: -123.365644};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: victoria,
        zoom: 13
    });

    // Using AJAX to get the XML data from the 'getData.php' file and use it
    // to display markers with info-boxes:

    var url = 'getData.php';
    var request = new XMLHttpRequest; // the main object to request the XML

    request.onreadystatechange = function() { // when the request changes state
        if (request.readyState == 4) { // success, we have recieved the XML object from sending the request

            // using the info from the XML
            var xml = request.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) { // looping through each element

                var id = markerElem.getAttribute('id');
                var name = markerElem.getAttribute('name');
                var address = markerElem.getAttribute('address');
                var point ={lat: parseFloat(markerElem.getAttribute('lat')),
                            lng: parseFloat(markerElem.getAttribute('lng'))};
    
                // creating info-box
                var markerInfo = document.createElement('div');

                var title = document.createElement('strong'); // name
                title.textContent = name;
                var text = document.createElement('text'); // address
                text.textContent = address;

                // appending the text to the info-box
                markerInfo.appendChild(title);
                markerInfo.appendChild(document.createElement('br'));
                markerInfo.appendChild(text);
    
                // create the marker on its according position
                var marker = new google.maps.Marker({
                    map: map,
                    position: point
                });

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