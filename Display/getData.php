<?php

header("Content-type: text/xml; charset=iso-8859-1");
echo "<?xml version='1.0' ?>";

require 'connect.php';

// Select DB
$db = mysqli_select_db($conn, "webapp1");
if (!$db) {
    die ('Can\'t use db : ' . mysql_error());
}


$cat = $_GET['cat'];

// Select all the rows in the restaurants table
$query = "SELECT DISTINCT restaurants.*, c2.cat 
          FROM restaurants JOIN categories c1 USING(id) JOIN categories c2 USING(id) 
          WHERE c1.cat LIKE '%'$cat'%'";
$result = mysqli_query($conn, $query);
if (!$result) {
    die('Invalid query: ' . mysql_error());
}


function parseToXML($htmlStr) {
    $xmlStr=str_replace('<','&lt;',$htmlStr);
    $xmlStr=str_replace('>','&gt;',$xmlStr);
    $xmlStr=str_replace('"','&quot;',$xmlStr);
    $xmlStr=str_replace("'",'&#39;',$xmlStr);
    $xmlStr=str_replace("&",'&amp;',$xmlStr);
    return $xmlStr;
}

// Start XML file, echo parent node
echo '<markers>';

// Iterate through the rows, printing XML nodes for each
$prev_id = -1;
$cat_str = "";

// Creating each XML node
while ($row = mysqli_fetch_assoc($result)) {
    $id = $row['id'];
    $new_cat = $row['cat'];

    if ($id != $prev_id) {

        if ($prev_id != -1) {
            echo 'cat="' . parseToXML(utf8_encode($cat_str)) . '" ';
            echo '/>';
        }
        echo '<marker ';
        echo 'id="' . $row['id'] . '" ';
        echo 'name="' . parseToXML($row['name']) . '" ';
        echo 'address="' . parseToXML($row['address']) . '" ';
        echo 'reviews="' . parseToXML($row['reviews']) . '" ';
        echo 'rating="' . parseToXML($row['rating']) . '" ';
        echo 'lat="' . $row['latitude'] . '" ';
        echo 'lng="' . $row['longitude'] . '" ';
        $cat_str = "$new_cat";
        $prev_id = $id;
    }
    else {
        $cat_str = "$cat_str, $new_cat";
    }
}

// Last XML marker
echo 'cat="' . parseToXML(utf8_encode($cat_str)) . '" ';
echo '/>';

// End XML file
echo '</markers>';

?>