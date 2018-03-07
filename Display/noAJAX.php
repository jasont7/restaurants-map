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

      function initMap() {
        var victoria = {lat: 48.4284, lng: -123.3656};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: victoria
        });

        <?php

            $username="root";
            $password="";
            $database="webapp1";
            $conn = mysqli_connect('localhost', $username, $password);

            // Check connection
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            // Select DB
            $db = mysqli_select_db($conn, $database);
            if (!$db) {
                die ('Can\'t use db : ' . mysql_error());
            }

            // Select all the rows in the restaurants table
            $query = "SELECT * FROM restaurants";
            $result = mysqli_query($conn, $query);
            if (!$result) {
                die('Invalid query: ' . mysql_error());
            }

            while ($row = mysqli_fetch_assoc($result)) {
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