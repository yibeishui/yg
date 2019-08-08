<?php
//获取手机号/ 会员/ 邮箱
$name=$_REQUEST["username"];
$password=$_REQUEST["password"];

// 查看myql 如果已经注册 返回错误
// 如果没有注册 返回成功  

$db=mysqli_connect("127.0.0.1","root","","yg");
// 号码
$sql = "SELECT * FROM users where phone = '$name'";
// 用户名
$result = mysqli_query($db,$sql);
if(mysqli_num_rows($result) == "0"){
    // mei you
    $data["status"] = "error";
    $data["msg"] = "登录失败：该用户不存在";
}else{
    $row= mysqli_fetch_array($result,MYSQLI_ASSOC);
  if($row["password"]!=$password){
    $data["status"] = "error";
    $data["msg"] = "登录失败：密码不正确！";
  }else{
    $data["status"] = "success";
    $data["msg"] = "恭喜你，登录成功！";

  }
}

echo json_encode($data, true);
// $data = array("status" => "", "msg" => "", "data" => "");
// if(mysqli_num_rows($result) == "0")
// {
//   $data["status"] = "error";
//   $data["msg"] = "登录失败：该用户不存在";
// }else{
//   /* 检查密码是否正确 */
// //   echo json_encode(mysqli_fetch_array($result)["password"], true);
//   if(mysqli_fetch_array($result)["password"] != $password)
//   {
//     $data["status"] = "error";
//     $data["msg"] = "登录失败：密码不正确！";
//   }else{
//     $data["status"] = "success";
//     $data["msg"] = "恭喜你，登录成功！";
//   }
// }




?>