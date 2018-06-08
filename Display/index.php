<!DOCTYPE html>
<html>
<head>
    <title>FoodAdvisor Map</title>
    <link rel="stylesheet" href="styles/autocomplete2.css" />
    <link rel="stylesheet" href="styles/styles.css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
</head>
<body onload = "myFunction()">

    <div id="map"></div>
    
    <div id="filtersPanel">
        <div class="menuButton" onclick="menuButton(this)"></div>

        <span class="icon" id="category-icon"> <i class="fas fa-utensils"> </i> </span>
        <input type="text" id="userInput" placeholder="Pizza, Burgers, Seafood..."></input>

        <div id="menu" style="display: none;">
            <span class="icon" id="city-icon"> <i class="fas fa-location-arrow"> </i> </span>
            <input type="text" id="cityInput" placeholder="City"></input>

            <input type="range" min="1" max="5" value="3" id="distRange" class="slider">
            <div id="rangeSize"></div>
        </div>
		<div onclick = "hideDiv();" class="popup"> 
  <span class="popuptext" id="myPopup"> Click anywhere to explore! </span>
</div>
    </div>
<script> 
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}; 

function hideDiv() {
	var box = document.getElementById("myPopup");
	box.style.display = "none";
}
</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.2/awesomplete.js" async></script>
    <script src="displayMap.js?random=<?php echo uniqid(); ?>"></script>
    <script src="styles/mapStyle.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyCtizU5211x11kL5k1LBvXbpZwNn99u0pc&callback=initMap" async defer></script>
</body>
</html>
