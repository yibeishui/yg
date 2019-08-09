<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yg");


$ppp=$_REQUEST["id"];

$result = "SELECT * FROM  `goodlist` where  id=$ppp";



$res=mysqli_query($con,$result);

$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo json_encode($data, true)



?>