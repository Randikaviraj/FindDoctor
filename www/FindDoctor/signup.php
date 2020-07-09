<?php
include 'connection.php';



$fname=$_GET['fname'];
$lname=$_GET['lname'];
$email=$_GET['email'];
$pwd=$_GET['password'];

$sql="INSERT INTO user(first_name,last_name,email,password) VALUES($fname,$lname,$email,$pwd)";


if (mysqli_query($con,$sql)) {
    echo "Successfully SignUp";
    
}else{
    echo "-1";
}


?>