<?php

$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$sql = "SELECT carlist.*,goodlist.* FROM carlist , goodList WHERE carlist.listid = goodlist.id";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>