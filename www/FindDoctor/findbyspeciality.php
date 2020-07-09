<?php
include 'connection.php';



$speciality_name=$_GET['speciality_name'];

$sql="SELECT doctor.first_name,doctor.last_name,hospital.name FROM(( works_at INNER JOIN doctor ON works_at.MCID=doctor.MCID) 
INNER JOIN hospital ON works_at.Hos_reg_id=hospital.Hos_reg_id)  WHERE doctor.specialized_field=$speciality_name";

$result=mysqli_query($con,$sql);
$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);

if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    echo json_encode(array());
}


?>