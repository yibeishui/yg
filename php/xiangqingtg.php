<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yg");




$result = "SELECT * 
FROM  `goodlist` 
ORDER BY  `goodlist`.`id` ASC 
LIMIT 0 , 3";

$res=mysqli_query($con,$result);

$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo json_encode($data, true)



?>