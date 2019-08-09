<?php

$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$listid = $_REQUEST["listid"];
$json=json_decode($listid);
for($i=0;$i<count($json);$i++){
    $sql = "DELETE FROM  carlist WHERE listid = '$json[$i]'"; 

   mysqli_query($con, $sql);
}




?>