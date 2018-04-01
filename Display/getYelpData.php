<?php

$API_KEY = "RPr7obmPeQ4_T3c2YTzAfbwpWGTeVVnhNOefvxDQexvFLWW9eGaXlezZuboEOhqSqOZtwuHkDZc8EwB-K_F6NVofrxtiH0MaZrcxtAhH-bJ_ULxqpEuZcwfxaHatWnYx";

$SEARCH_LIMIT = 50;
$LATITUDE = $_GET['lat'];
$LONGITUDE = $_GET['lng'];
$CATEGORIES = $_GET['cat'];


function request($key, $limit, $latitude, $longitude, $categories) {
    $url_params = array();
    
    $url_params['limit'] = $limit;
    $url_params['latitude'] = $latitude;
    $url_params['longitude'] = $longitude;
    $url_params['categories'] = $categories;


    // Send Yelp API Call
    try {
        $curl = curl_init();
        if (FALSE === $curl)
            throw new Exception('Failed to initialize');

        $url = "https://api.yelp.com/v3/businesses/search" . "?" . http_build_query($url_params);
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,  // Capture response.
            CURLOPT_ENCODING => "",  // Accept gzip/deflate/whatever.
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "authorization: Bearer " . $key,
                "cache-control: no-cache",
            ),
        ));

        $response = curl_exec($curl);

        if (FALSE === $response)
            throw new Exception(curl_error($curl), curl_errno($curl));

        $http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if (200 != $http_status)
            throw new Exception($response, $http_status);

        curl_close($curl);
    } 
    catch(Exception $e) {
        trigger_error(sprintf(
            'Curl failed with error #%d: %s',
            $e->getCode(), $e->getMessage()),
            E_USER_ERROR);
    }

    return $response;
}


echo request($API_KEY, $SEARCH_LIMIT, $LATITUDE, $LONGITUDE, $CATEGORIES);

?>