<?php

$host=getenv('DB_HOST');
$username=getenv('DB_USER');
$password=getenv('DB_PASS');
$schema=getenv('DB_SCHEMA');

$conn = mysqli_connect($host, $username, $password, $schema);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>