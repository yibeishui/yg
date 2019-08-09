<?php

$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$listid = $_REQUEST["listid"];
$sql = "DELETE FROM carlist  WHERE listid='$listid'";
mysqli_query($con, $sql);
?>