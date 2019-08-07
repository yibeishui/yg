<?php

$phone=$_REQUEST["phone"];
// 查看myql 如果已经注册 返回错误
// 如果没有注册 返回成功  

$db=mysqli_connect("127.0.0.1","root","","yg");

//需修改 只查询
$sql="INSERT INTO `users` (`phone`) VALUES ('$phone')";
$result = mysqli_query($db, $sql);
// var_dump($result);
$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
 
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "手机号码已存在！";
}
echo json_encode($data,true);


?>