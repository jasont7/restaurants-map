<!DOCTYPE html>
<html>
<head>
    <title>Food Advisor</title>
    <link rel="stylesheet" href="styles/landingpage.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
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

    <form id="search" action="localhost/display/index.php" method="get">
        <span class="icon"><i class="fas fa-utensils"></i></span>
        <input id="categoryInput" name="category" type="text" placeholder="Pizza, Burgers, Seafood..."/>

        <span class="icon"><i class="fas fa-location-arrow"></i></span>
        <input id="cityInput" name="city" type="text" placeholder="City"/>

        <input id="searchBtn" class="btnMain" value="Find" type="submit"/>
    </form>

</body>
</html>