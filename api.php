<?php
 
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

echo  $method;
echo $input;


switch ($method) {
  case 'GET':
    break;
  case 'PUT':
    break;
  case 'POST':
    $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
    //fwrite($myfile, print_r($input, true));
    $out = array_values($input);
	fwrite($myfile, json_encode($out));
    fclose($myfile);
    break;
  case 'DELETE':
    break;
}


?>