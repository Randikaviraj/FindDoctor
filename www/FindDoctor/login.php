<?php
include 'connection.php';



$email=$_GET['email'];

$sql="SELECT * FROM user WHERE user.email=$email ";

$result=mysqli_query($con,$sql);
$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);
if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    http_response_code(404);
}


?>