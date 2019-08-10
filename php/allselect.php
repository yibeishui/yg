<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yg");

$ppp=$_REQUEST["cont"];

$paixu=$_REQUEST["paixu"];

if($paixu=="no"){
    $result = "SELECT * 
    FROM  `goodlist` ORDER BY  `goodlist`.`id` ASC ";
}else{
if($paixu=="true"){
    $result = "SELECT * 
    FROM  `goodlist` 
    ORDER BY  `goodlist`.`price` ASC ";
}else{
    $result = "SELECT * 
    FROM  `goodlist` 
    ORDER BY  `goodlist`.`price` DESC ";
};
};

$res=mysqli_query($con,$result);

$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo json_encode($data, true)



?>