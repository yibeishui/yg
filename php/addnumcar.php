<?php

$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$listid = $_REQUEST["listid"];

   $sql = "SELECT * FROM  carlist WHERE listid = '$listid'";
   $result = mysqli_query($con,$sql);
   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
   $num = $data[0]["num"] + 1;
   /* 更新 */
   $updateSql = "UPDATE carlist SET num='$num' WHERE listid=' $listid'";
   mysqli_query($con, $updateSql);



?>