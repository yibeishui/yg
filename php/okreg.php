<?php

$phone=$_REQUEST["phone"];
$passwork=$_REQUEST["passwork"];
// 查看myql 如果已经注册 返回错误
// 如果没有注册 返回成功  

$db=mysqli_connect("127.0.0.1","root","","yg");
$sql = "INSERT INTO `users` (`password`, `phone`) VALUES ('$passwork', '$phone')";
$result = mysqli_query($db, $sql);
// #bool(false)  | bool(true)
// var_dump($result);

/* 返回JSON数据给客户端 */
/* 规范：{"status":"success","msg":"注册成功","data":""} */
$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);






?>