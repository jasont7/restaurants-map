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
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>

        var map;

      function initMap() {
        var victoria = {lat: 48.4284, lng: -123.3656};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: victoria
        });

        <?php

            $username="root";
            $password="";
            $database="webapp1";

            // Opens a connection to a MySQL server
            $connection=mysql_connect ('localhost', $username, $password);
            if (!$connection) {
                die('Not connected : ' . mysql_error());
            }

            // Set the active MySQL database
            $db_selected = mysql_select_db($database, $connection);
            if (!$db_selected) {
                die ('Can\'t use db : ' . mysql_error());
            }

            // Select all the rows in the markers table
            $query = "SELECT * FROM restaurants";
            $result = mysql_query($query);
            if (!$result) {
                die('Invalid query: ' . mysql_error());
            }

            while ($row = @mysql_fetch_assoc($result)) {
                $lat = $row['latitude'];
                $lng = $row['longitude'];
                $id = $row['id'];

                echo
                "var marker$id = new google.maps.Marker({
                    position: {lat: $lat, lng: $lng}, 
                    map: map
                });";
              }

            
        ?>
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtizU5211x11kL5k1LBvXbpZwNn99u0pc&callback=initMap">
    </script>
  </body>
</html>