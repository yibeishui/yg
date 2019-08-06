$(function(){

// 默认情况
$(".userlogin-tousername").css("left","0px");
$(".login-modes-active").css("height",$(".login-modes-div").eq(0).height()+40)

// 点击切换不同方式登陆
$(".login-modes").click(function(e){
    e.preventDefault();
    let ind=$(this).index();
    let divh= $(".login-modes-div").eq(ind).height();
    $(this).addClass("login-mode-active").siblings().removeClass("login-mode-active");
    $(".login-modes-active").animate({"height":`${divh+40}`});
    $(".login-modes-div").eq(ind).siblings().animate({"left":"-346px"},300,function(){
        $(".login-modes-div").eq(ind).animate({"left":"0px"},300)
    })
})








})