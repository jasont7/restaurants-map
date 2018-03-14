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
        text-align: center;
        box-shadow: 0 0 30px 5px #999;
    }
    #userInput {
        display: block;
        margin: 0 auto;
    }
    #numResults {
        padding: 10px;
    }
    </style>
</head>
<body>
    <div id="map"></div>
    <div id="filtersPanel">
        <input type="text" id="userInput" class="autocomplete"></input>
        <div id="numResults"></div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!-- Generate a unique ID every time script loads to prevent caching -->
    <script src="displayMap.js?random=<?php echo uniqid(); ?>"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtizU5211x11kL5k1LBvXbpZwNn99u0pc&callback=initMap"></script>
</body>
</html>