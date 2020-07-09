<?php
include 'connection.php';



$date=$_GET['date'];
$hospital_name=$_GET['hospital_name'];


$sql="SELECT hospital.name,doctor.first_name,doctor.last_name,doctor.specialized_field,works_at.working_hours FROM((works_at INNER JOIN doctor ON works_at.MCID=doctor.MCID)
INNER JOIN hospital ON works_at.Hos_reg_id=hospital.Hos_reg_id) WHERE hospital.name LIKE CONCAT($hospital_name,'%') AND works_at.working_days=$date";

$result=mysqli_query($con,$sql);
$result_array=mysqli_fetch_all($result,MYSQLI_ASSOC);

if (!empty($result)) {
    echo json_encode($result_array);
    
}else{
    echo json_encode(array());
}


?>