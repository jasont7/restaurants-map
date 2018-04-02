<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.2/awesomplete.css" />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="map"></div>
    <div id="filtersPanel">
        <div id="numResults"></div>
        <input type="text" id="userInput"></input>
        <input type="range" min="1" max="7" value="4" id="distRange">
        <div id="rangeSize"></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.2/awesomplete.js" async></script>
    <script src="displayMap.js?random=<?php echo uniqid(); ?>"></script>
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyCtizU5211x11kL5k1LBvXbpZwNn99u0pc&callback=initMap" async defer></script>
</body>
</html>
