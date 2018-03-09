<?php

header("Content-type: text/xml");
echo "<?xml version='1.0' ?>";

$servername="localhost";
$username="root";
$password="";
$conn = mysqli_connect($servername, $username, $password);

function parseToXML($htmlStr) {
    $xmlStr=str_replace('<','&lt;',$htmlStr);
    $xmlStr=str_replace('>','&gt;',$xmlStr);
    $xmlStr=str_replace('"','&quot;',$xmlStr);
    $xmlStr=str_replace("'",'&#39;',$xmlStr);
    $xmlStr=str_replace("&",'&amp;',$xmlStr);
    return $xmlStr;
}

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Select DB
$db = mysqli_select_db($conn, "webapp1");
if (!$db) {
    die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the restaurants table
$query = "SELECT * FROM restaurants";
$result = mysqli_query($conn, $query);
if (!$result) {
    die('Invalid query: ' . mysql_error());
}


// Start XML file, echo parent node
echo '<markers>';

// Iterate through the rows, printing XML nodes for each
while ($row = mysqli_fetch_assoc($result)) {
    // Creating each XML node
    echo '<marker ';
    echo 'id="' . $row['id'] . '" ';
    echo 'name="' . parseToXML(utf8_encode($row['name'])) . '" ';
    echo 'address="' . parseToXML($row['address']) . '" ';
    echo 'reviews="' . parseToXML($row['reviews']) . '" ';
    echo 'rating="' . parseToXML($row['rating']) . '" ';
    echo 'lat="' . $row['latitude'] . '" ';
    echo 'lng="' . $row['longitude'] . '" ';
    echo '/>';
}

// End XML file
echo '</markers>';

?>