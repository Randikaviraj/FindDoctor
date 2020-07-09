<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


function connect(){
    @ $conn=mysqli_connect('localhost','root','','db_364_039_127_332');

    if(!$conn){
        die("Failed to connect server error");
        
    }else{
        return $conn;
    }
}


$con=connect();

?>
