<?php
include 'connection.php';



$sql=" SELECT DISTINCT specialized_field FROM doctor";

$result=mysqli_query($con,$sql);
$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);
if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    http_response_code(404);
}


?>