<!DOCTYPE html>
<html>
<head>
    <style>
    #map {
        height: 100%;
    }
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #filtersPanel {
        height: 350px;
        width: 175px;
        background-color: #fff;
        padding: 20px;
        margin: 100px;
    }
    #userInput {
        display: block;
        margin: 0 auto;
    }
    </style>
</head>
<body onload="initMap()">
    <div id="map"></div>
    <div id="filtersPanel">
        <input type="text" id="userInput"></input>
    </div>
    <script src="displayMap.js?random=<?php echo uniqid(); ?>"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtizU5211x11kL5k1LBvXbpZwNn99u0pc&callback=initMap"></script>
</body>
</html>