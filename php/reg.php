<?php

$phone=$_REQUEST["phone"];
// 查看myql 如果已经注册 返回错误
// 如果没有注册 返回成功  

$db=mysqli_connect("127.0.0.1","root","","yg");
// $re = mysql_query(select * from qianwe_dj where CD_Url='".$name."');
//需修改 只查询
// $sql="SELECT phone FROM users where phone='"$phone"'";

$result = "SELECT * FROM users where phone=$phone";
$res=mysqli_query($db,$result);

if( mysqli_num_rows($res)=="0"){
   echo "success";
}else{
  echo "用户已存在";
}


?>