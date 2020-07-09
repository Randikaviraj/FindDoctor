<?php
include 'connection.php';



$name=$_GET['doctors_name'];

$sql="SELECT doctor.first_name,doctor.last_name,doctor.specialized_field,hospital.name,hospital.contact,hospital.town,works_at.Working_hours,works_at.Working_days FROM ((works_at INNER JOIN doctor on works_at.MCID=doctor.MCID) INNER JOIN hospital ON works_at.Hos_reg_id=hospital.Hos_reg_id) WHERE doctor.first_name=$name || doctor.last_name=$name";


$result=mysqli_query($con,$sql);

$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);

if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    echo json_encode(array());
}


?>