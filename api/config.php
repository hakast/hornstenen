<?php

header('Access-Control-Allow-Headers: Origin,  X-Auth-Token, Methods, Content-Type, Accept');

header('Access-Control-Allow-Origin: http://localhost:8080');

// header('Access-Control-Allow-Origin: *);

// header('Content-Type: application/x-www-form-urlencoded');

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$db = mysqli_connect('localhost', 'root', '', 'react_native_01_form');

mysqli_query($db, "SET NAMES utf8");

