<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yg");
$json = file_get_contents("../json/goods.json");

$data = json_decode($json,true);
for($i = 0; $i < count($data);$i++)
{
    $type=$data[$i]["type"];
    $middletype=$data[$i]["middletype"];
    $smalltype=$data[$i]["smalltype"];
    $img=$data[$i]["img"];
    $price=$data[$i]["price"];
    $youhui=$data[$i]["youhui"];
    $tit=$data[$i]["tit"];
    $titcon=$data[$i]["titcon"];
    $turnover=$data[$i]["turnover"];
    $pinlun=$data[$i]["pinlun"];
    $shorw=$data[$i]["shorw"];
    $shop=$data[$i]["shop"];


 $sql = "INSERT INTO `goodList` (`id`, `type`, `middletype`, `smalltype`, `img`, `price`,`youhui`,`tit`,`titcon`,`turnover`,`pinlun`,`shorw`,`shop`) 
 VALUES (NULL, '$type', '$middletype', '$smalltype', '$img', '$price','$youhui','$tit','$titcon','$turnover','$pinlun','$shorw','$shop')";
 mysqli_query($con,$sql);
}

?>