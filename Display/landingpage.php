<!DOCTYPE html>
<html>
<head>
    <title>Food Advisor</title>
    <link rel="stylesheet" href="styles/landingpage.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.2/awesomplete.js"></script>
    <link rel="stylesheet" href="styles/autocomplete1.css">
</head>
<body>
    <div id="logodiv">
        <img id="logo" src="images/logo.png">
    </div>

    <h2 class="sentence">I want 
        <div class="slidingVertical">
            <span>a quick snack.</span>
            <span>drinks with friends.</span>
            <span>something new.</span>
            <span>a fun night out.</span>
            <span>fast food.</span>
        </div>
    </h2>

    <form id="search" action="index.php" method="get" autocomplete="off">
        <span class="icon"> <i class="fas fa-utensils"> </i> </span>
        <input id="categoryInput" name="category" type="text" placeholder="Pizza, Burgers, Seafood..."/>

        <span class="icon"> <i class="fas fa-location-arrow"> </i> </span>
        <input id="cityInput" name="city" type="text" placeholder="City" required/>

        <input id="searchBtn" class="btnMain" value="Find" type="submit"/>
    </form>

    <script>
        var categories = [];
        getCategories('getCategories.php');

        var userCat = document.getElementById('categoryInput');
        var userCity = document.getElementById('cityInput');

        var autoCat = new Awesomplete(userCat, {
            list: categories,
            filter: Awesomplete.FILTER_STARTSWITH,
            minChars: 0
        });

        var autoCity = new Awesomplete(userCity, {
            list: ["Victoria", "Oak Bay", "Vancouver"],
            filter: Awesomplete.FILTER_STARTSWITH,
            minChars: 0
        });

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
    </script>

</body>
</html>