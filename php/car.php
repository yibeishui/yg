<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$listid = $_REQUEST["listid"];

$price = $_REQUEST["price"];


/* 分两种情况 */
/* 001-第一次添加该商品  插入数据 */
$sql = "SELECT * FROM  carlist WHERE listid = '$listid'";
$result = mysqli_query($con,$sql);
$row = mysqli_num_rows($result);

if($row == 0)
{ 
   $insetSql = "INSERT INTO `carlist` (`cartid`, `listid`, `num`, `total`,`price`,`isActive`) 
   VALUES (NULL, '$listid', 1, '$price','$price',1)";
   mysqli_query($con,$insetSql);

}elseif($row == 1){
   /* 002-购物车中已经存在该商品  更新数据 */
   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
   $num = $data[0]["num"] + 1;
   $total = $data[0]["price"] * $num;

   /* 更新 */
   $updateSql = "UPDATE carlist SET num='$num',total='$total' WHERE listid=' $listid'";
   mysqli_query($con, $updateSql);
}


$totalCount = "SELECT * FROM  carlist";
$result = mysqli_query($con, $totalCount);
$row = mysqli_num_rows($result);
echo '{"totalRow":'.$row.'}';


?>