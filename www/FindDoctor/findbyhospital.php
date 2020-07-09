<?php
include 'connection.php';



$hospital_name=$_GET['hospital_name'];

$sql="SELECT hospital.name,hospital.contact,hospital.town,hospital.sector,doctor.first_name,doctor.last_name,doctor.specialized_field FROM ((works_at INNER JOIN doctor ON works_at.MCID=doctor.MCID) INNER JOIN hospital ON works_at.hos_reg_id=hospital.hos_reg_id) WHERE hospital.name LIKE CONCAT($hospital_name,'%')";

$result=mysqli_query($con,$sql);
$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);

if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    echo json_encode(array());
}


?>