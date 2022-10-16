<?php

header("Content-type: text/xml");
echo "<?xml version='1.0' ?>";

require 'connect.php';


//Select all of the categories from table
$queryCategories = "SELECT cat FROM categories GROUP BY cat;";
$result = mysqli_query($conn, $queryCategories);
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

echo "<categories>";

// Iterate through the rows, printing XML nodes for each
while ($row = mysqli_fetch_assoc($result)) {
    echo "<category ";
    echo 'cat="' . parseToXML(utf8_encode($row['cat'])) . '" ';
    echo "/>";
}

echo "</categories>"

?>