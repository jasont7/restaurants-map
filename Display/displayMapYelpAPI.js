var map;
var markersArray = [];
var cat = "restaurants, All";

var C = [
    "Afghan",
    "African",
    "American (New)",
    "American (Traditional)",
    "Andalusian",
    "Arabian",
    "Argentine",
    "Armenian",
    "Asian Fusion",
    "Asturian",
    "Australian",
    "Austrian",
    "Baguettes",
    "Bangladeshi",
    "Barbeque",
    "Basque",
    "Bavarian",
    "Beer Garden",
    "Beer Hall",
    "Beisl",
    "Belgian",
    "Bistros",
    "Black Sea",
    "Brasseries",
    "Brazilian",
    "Breakfast & Brunch",
    "British",
    "Buffets",
    "Bulgarian",
    "Burgers",
    "Burmese",
    "Cafes",
    "Cafeteria",
    "Cajun/Creole",
    "Cambodian",
    "Canadian (New)",
    "Canteen",
    "Caribbean",
    "Catalan",
    "Cheesesteaks",
    "Chicken Shop",
    "Chicken Wings",
    "Chilean",
    "Chinese",
    "Comfort Food",
    "Corsican",
    "Creperies",
    "Cuban",
    "Curry Sausage",
    "Cypriot",
    "Czech",
    "Czech/Slovakian",
    "Danish",
    "Delis",
    "Diners",
    "Dinner Theater",
    "Dumplings",
    "Eastern European",
    "Ethiopian",
    "Fast Food",
    "Filipino",
    "Fischbroetchen",
    "Fish & Chips",
    "Flatbread",
    "Fondue",
    "Food Court",
    "Food Stands",
    "Freiduria",
    "French",
    "French Southwest",
    "Galician",
    "Game Meat",
    "Gastropubs",
    "Georgian",
    "German",
    "Giblets",
    "Gluten-Free",
    "Greek",
    "Guamanian",
    "Halal",
    "Hawaiian",
    "Heuriger",
    "Himalayan/Nepalese",
    "Honduran",
    "Hong Kong Style Cafe",
    "Hot Dogs",
    "Hot Pot",
    "Hungarian",
    "Iberian",
    "Indian",
    "Indonesian",
    "International",
    "Irish",
    "Island Pub",
    "Israeli",
    "Italian",
    "Japanese",
    "Jewish",
    "Kebab",
    "Kopitiam",
    "Korean",
    "Kosher",
    "Kurdish",
    "Laos",
    "Laotian",
    "Latin American",
    "Live/Raw Food",
    "Lyonnais",
    "Malaysian",
    "Meatballs",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Milk Bars",
    "Modern Australian",
    "Modern European",
    "Mongolian",
    "Moroccan",
    "New Mexican Cuisine",
    "New Zealand",
    "Nicaraguan",
    "Night Food",
    "Nikkei",
    "Noodles",
    "Norcinerie",
    "Open Sandwiches",
    "Oriental",
    "PF/Comercial",
    "Pakistani",
    "Pan Asian",
    "Parent Cafes",
    "Parma",
    "Persian/Iranian",
    "Peruvian",
    "Pita",
    "Pizza",
    "Polish",
    "Polynesian",
    "Pop-Up Restaurants",
    "Portuguese",
    "Potatoes",
    "Poutineries",
    "Pub Food",
    "Rice",
    "Romanian",
    "Rotisserie Chicken",
    "Russian",
    "Salad",
    "Sandwiches",
    "Scandinavian",
    "Schnitzel",
    "Scottish",
    "Seafood",
    "Serbo Croatian",
    "Signature Cuisine",
    "Singaporean",
    "Slovakian",
    "Soul Food",
    "Soup",
    "Southern",
    "Spanish",
    "Sri Lankan",
    "Steakhouses",
    "Supper Clubs",
    "Sushi Bars",
    "Swabian",
    "Swedish",
    "Swiss Food",
    "Syrian",
    "Tabernas",
    "Taiwanese",
    "Tapas Bars",
    "Tapas/Small Plates",
    "Tavola Calda",
    "Tex-Mex",
    "Thai",
    "Traditional Norwegian",
    "Traditional Swedish",
    "Trattorie",
    "Turkish",
    "Ukrainian",
    "Uzbek",
    "Vegan",
    "Vegetarian",
    "Venison",
    "Vietnamese",
    "Waffles",
    "Wok",
    "Wraps",
    "Yugoslav"
];
var D = [
    "afghani, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "african, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "newamerican, [IE, NO, US, SE, GB, DK]",
    "tradamerican, All",
    "andalusian, [ES, IT]",
    "arabian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "argentine, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "armenian, [IT, PL, US, ES, GB, CZ, AR, FR, BE, TR]",
    "asianfusion, All",
    "asturian, [ES]",
    "australian, All",
    "austrian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "baguettes, [IT, MX, PT, CZ, DE, SE, NO, TR]",
    "bangladeshi, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, FI, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "bbq, [AR, AT, BE, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "basque, [AR, AT, BE, BR, CA, CH, CL, DE, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, TW, US]",
    "bavarian, [AT, CH, DE]",
    "beergarden, [CZ, AT, CH, DE]",
    "beerhall, [AT, CH, DE]",
    "beisl, [AT]",
    "belgian, All",
    "bistros, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW]",
    "blacksea, [TR]",
    "brasseries, [AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "brazilian, All",
    "breakfast_brunch, All",
    "british, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "buffets, All",
    "bulgarian, [AR, AT, AU, BE, CH, CL, CZ, DE, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, PH, PL, PT, SE, TW, US]",
    "burgers, All",
    "burmese, [AR, AT, AU, BE, BR, CA, CH, CL, DE, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "cafes, [AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "cafeteria, [AR, AT, AU, BE, CH, CL, CZ, DE, DK, ES, FI, GB, HK, IT, JP, MX, MY, NL, NO, PH, PL, PT, TR, TW, US]",
    "cajun, [AR, AT, BE, BR, CA, CH, CL, CZ, DE, DK, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, TR, TW, US]",
    "cambodian, [AR, AT, AU, BE, BR, CA, CH, CL, DE, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "newcanadian, [CA]",
    "canteen, [IT, PL, FI, AT, JP, NL, CZ, DE, BE, CH, DK, NO]",
    "caribbean, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "catalan, [IT, MX, US, ES, CL, PT, AR, FR, TR]",
    "cheesesteaks, [AU, IE, CA, PL, US, NL, GB]",
    "chickenshop, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "chicken_wings, [AR, AT, AU, BR, CA, CZ, DE, GB, HK, IE, MX, MY, NZ, PH, PL, SE, SG, TR, TW, US]",
    "chilean, [CL, FI, FR, BR]",
    "chinese, All",
    "comfortfood, [MX, CA, US, FI, AR, CL, JP]",
    "corsican, [BE, FR]",
    "creperies, All",
    "cuban, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, TW, US]",
    "currysausage, [AT, CH, DE]",
    "cypriot, [AT, CH, DE]",
    "czech, [IE, IT, PL, US, FI, GB, AU, CA, CZ, DE, FR, SE, BE, DK, NO]",
    "czechslovakian, [MX, PT, AR]",
    "danish, [SE, DK, NO, FR]",
    "delis, [AR, AT, AU, BR, CA, CH, CZ, DE, DK, ES, FI, GB, HK, IE, JP, MX, MY, NO, NZ, PH, PL, SG, TR, TW, US]",
    "diners, [AR, AT, BE, BR, CA, CH, CL, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SG, TR, TW, US]",
    "dinnertheater, [AR, AT, AU, BR, CA, CH, CL, CZ, DE, DK, ES, FI, GB, HK, IE, MX, MY, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "dumplings, [JP]",
    "eastern_european, [AU, CZ, FR, DK, NO]",
    "ethiopian, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, PT, SE, TW, US]",
    "hotdogs, All",
    "filipino, [AR, AT, AU, BE, BR, CA, CH, CL, DE, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "fischbroetchen, [DE]",
    "fishnchips, [AR, AT, AU, BE, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TR, TW, US]",
    "flatbread, [PL, DE, AT, DK, CH]",
    "fondue, [AR, AT, AU, BE, BR, CA, CH, CL, DE, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "food_court, [AT, AU, BE, BR, CA, CH, CZ, DE, DK, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PT, SE, SG, US]",
    "foodstands, All",
    "freiduria, [ES, CL, MX, AR]",
    "french, All",
    "sud_ouest, [BE, FR]",
    "galician, [ES, PT]",
    "gamemeat, [AT, AU, BE, CH, CZ, DE, DK, ES, FR, GB, IE, IT, NL, NO, NZ, PL, SE, SG, US]",
    "gastropubs, All",
    "georgian, [PL, US, FI, AT, GB, CZ, DE, CH]",
    "german, All",
    "giblets, [TR]",
    "gluten_free, All",
    "greek, All",
    "guamanian, [AT, AU, BE, BR, CA, CH, CZ, DE, DK, ES, FI, GB, HK, IE, IT, MY, NL, NO, NZ, PH, PT, SE, SG, TW, US]",
    "halal, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "hawaiian, [AR, AT, BE, BR, CA, CH, CL, DE, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "heuriger, [AT]",
    "himalayan, All",
    "honduran, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "hkcafe, [TW, US, CA, HK]",
    "hotdog, All",
    "hotpot, [US, BR, MY, JP, CA, HK, PH, FR, SE, TW, SG]",
    "hungarian, All",
    "iberian, [CA, PT, US]",
    "indpak, All",
    "indonesian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, FI, FR, GB, HK, IE, IT, JP, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "international, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, JP, MX, NL, NO, NZ, PL, PT, SE, SG, TW]",
    "irish, All",
    "island_pub, [SE]",
    "israeli, [CZ, AT, CH, DE]",
    "italian, All",
    "japanese, All",
    "jewish, [DE, IT, PL]",
    "kebab, All",
    "kopitiam, [SG, MY]",
    "korean, All",
    "kosher, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "kurdish, [NO, SE]",
    "laos, [AU]",
    "laotian, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "latin, All",
    "raw_food, All",
    "lyonnais, [BE, FR]",
    "malaysian, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "meatballs, [NL, BE, TR, FR]",
    "mediterranean, All",
    "mexican, All",
    "mideastern, [AR, AT, AU, BE, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "milkbars, [AU, PL]",
    "modern_australian, [AU]",
    "modern_european, All",
    "mongolian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "moroccan, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "newmexican, [US]",
    "newzealand, [NZ]",
    "nicaraguan, [AT, AU, BE, BR, CA, CH, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "nightfood, [PL, SE, DK, NO, TR]",
    "nikkei, [MX, BR, AR, ES, CL]",
    "noodles, [AR, AU, BE, BR, CA, CL, CZ, DK, ES, FI, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "norcinerie, [IT]",
    "opensandwiches, [DK, NO, TR, SE]",
    "oriental, [DE, FR, AT, PT, CH]",
    "pfcomercial, [BR]",
    "pakistani, All",
    "panasian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "eltern_cafes, [AT, CH, DE]",
    "parma, [AU]",
    "persian, All",
    "peruvian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, TW, US]",
    "pita, [TR]",
    "pizza, All",
    "polish, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, TR, TW, US]",
    "polynesian, [US]",
    "popuprestaurants, [IE, MY, AU, CA, FR, TW, SE, SG, DK, NO, US, NZ, NL, GB, HK, DE, PH, BE]",
    "portuguese, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "potatoes, [AU, AT, CH, DE]",
    "poutineries, [CA, US]",
    "pubfood, [AU]",
    "riceshop, [JP, TR]",
    "romanian, [PL, ES, AT, CZ, DE, FR, BE, CH]",
    "rotisserie_chicken, [IT, MX, PL, NZ, BR, ES, CL, PT, NL, AU, AR, FR, BE]",
    "russian, All",
    "salad, All",
    "sandwiches, All",
    "scandinavian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TR, TW, US]",
    "schnitzel, [AT, PL, CH, DE]",
    "scottish, [IE, CA, US, DE, AT, GB, CH]",
    "seafood, All",
    "serbocroatian, [IT, PL, AT, CL, CZ, DE, AR, FR, SE, BE, CH]",
    "signature_cuisine, [MX, ES, CL, PT, AR, SE, DK, NO]",
    "singaporean, [AR, AT, AU, BE, BR, CA, CH, CL, DE, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "slovakian, [IE, IT, PL, US, GB, AU, CA, CZ, FR, BE]",
    "soulfood, [IE, PL, US, ES, NL, GB, CA, SE, NO]",
    "soup, All",
    "southern, [IE, PL, NZ, US, NL, GB, CA, SE, TR]",
    "spanish, All",
    "srilankan, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]",
    "steak, All",
    "supperclubs, [ES, GB, CA, US]",
    "sushi, All",
    "swabian, [AT, CH, DE]",
    "swedish, [SE]",
    "swissfood, [MX, CZ, DE, AR, ES, CL, CH]",
    "syrian, All",
    "tabernas, [ES, PT, TR]",
    "taiwanese, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TW, US]",
    "tapas, [AR, AT, BE, BR, CA, CH, CL, CZ, DE, DK, ES, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, TR, TW, US]",
    "tapasmallplates, All",
    "tavolacalda, [IT]",
    "tex-mex, [AR, AT, BE, BR, CA, CH, CL, CZ, DE, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, SE, SG, TR, TW, US]",
    "thai, All",
    "norwegian, [NO, FR]",
    "traditional_swedish, [SE, FI]",
    "trattorie, [IT, PL, AR, FR, CL, CH]",
    "turkish, All",
    "ukrainian, [AR, AT, AU, BE, BR, CA, CH, CL, CZ, DE, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TW, US]",
    "uzbek, [CZ, US]",
    "vegan, All",
    "vegetarian, All",
    "venison, [IE, IT, PL, NZ, GB, AU, CA, CZ, SG, DK, NO]",
    "vietnamese, All",
    "waffles, All",
    "wok, [AT, BE, CH, CL, CZ, DE, DK, ES, FI, FR, MX, MY, NL, NO, PH, PT, SE]",
    "wraps, [US, CZ, SE, PT, DK, NO, TR]",
    "yugoslav, [AU, IT, FR, SE, BE, PT]"
];


function initMap() {
    // Create a map object and specify the Div element to display it on
    loc = {lat: 41.902783, lng: 12.496366};
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 14,
        disableDefaultUI: true
    });

    // Displays all of the markers when page loads, all restaurants
    getJsonData('getYelpData.php?cat=restaurants, All&lat='+loc.lat+'&lng='+loc.lng, map);

    var filtersPanel = document.getElementById('filtersPanel');
    var textField1 = document.getElementById('userInput');

    // Displays the markers according the value the user is typing (cat)
    function useValue() {
        clearMarkers();

        var textFieldVal = textField1.value;
        var ind = findIndex(textFieldVal);

        if (ind != -1) {
            cat = D[ind];
        }
        getJsonData('getYelpData.php?cat='+cat+'&lat='+loc.lat+'&lng='+loc.lng, map);
    }

    // Text box event handlers
    //textField1.oninput = useValue;
    textField1.onchange = useValue;
    textField1.addEventListener("awesomplete-selectcomplete", useValue);

    google.maps.event.addListener(map, 'click', function(event) {
        latitude = event.latLng.lat();
        longitude =  event.latLng.lng();
        newCenter = {lat: latitude, lng: longitude};
        map.setCenter(newCenter);
        loc = newCenter;
        
        useValue();
    });

    var autocomplete = new Awesomplete(textField1, {
        list: C,
        filter: Awesomplete.FILTER_STARTSWITH,
        minChars: 1,
        autoFirst: true
    });

    // Displays the filters panel in the top-left of the screen
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(filtersPanel);
}


function findIndex(cat) {
    for(var i=0; i<C.length; i++) {
        if(C[i] == cat)
            return i;
    }
    return -1;
}

function clearMarkers() {
    // Clears the markers from the map and array
    console.log("Clearing");
    
    for (var i=0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}


function getJsonData(url, map) {
    // Using AJAX to get the JSON data from the 'getYelpData.php' file and display markers with info-boxes on the map

    var request = new XMLHttpRequest; // the main object to request the XML

    request.onreadystatechange = function() { // when the request changes state
        if (request.readyState == 4) { // success, we have recieved the XML object from sending the request

            var json = request.responseText;
            var obj = JSON.parse(json);

            var numMarkers = obj.businesses.length;
            document.getElementById("numResults").innerHTML = numMarkers + " results";

            for (var i = 0; i < obj.businesses.length; i++) {
                (function(index) {

                    // Getting all of the attributes for each business from the JSON
                    var business = obj.businesses[index];
                    var name = business.name;

                    var catArr = business.categories;
                    var catStr = "";
                    for (j=0; j < catArr.length; j++) {
                        if (j == 0) {
                            catStr += catArr[j].title;
                        } else if (j > 0) {
                            catStr += ", " + catArr[j].title;
                        }
                    }
            
                    var reviews = business.review_count;
                    var rating = business.rating;
                    var address = business.location.address1 + ", " + business.location.city + ", " + business.location.state;
                    var coord = {lat: business.coordinates.latitude,
                                lng: business.coordinates.longitude};
                    var url = business.url;
                    var img_url = business.image_url;



                    // Creating the info-box
                    var markerInfo = document.createElement('div');

                    var title = document.createElement('strong'); // name
                    title.textContent = name;
                    var text0 = document.createElement('text'); // categories
                    text0.textContent = catStr;
                    var text1 = document.createElement('text'); // address
                    text1.textContent = address;
                    var text2 = document.createElement('text'); // reviews
                    text2.textContent = reviews + " reviews";
                    var text3 = document.createElement('text'); // rating
                    text3.textContent = rating + " stars";

                    // Appending the text to the info-box
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
                        position: coord
                    });

                    // change the opacity of the markers according to rating
                    if (rating >= 4) {
                        marker.setOpacity(1.0);
                    } else if (rating >= 2.5 && rating < 4) {
                        marker.setOpacity(0.8);
                    } else if (rating < 2.5) {
                        marker.setOpacity(0.6);
                    }

                    // set the info-box to the marker on click
                    infoWindow = new google.maps.InfoWindow;
                    marker.addListener('click', function() {
                        console.log("Registering");
                        infoWindow.setContent(markerInfo);
                        infoWindow.open(map, marker);
                    });

                    markersArray.push(marker);
                })(i);
            }
        }
    };
    request.open('GET', url); // initialize the request
    request.send(); // send the request

}
