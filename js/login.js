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

$(".module-foot").load("./model/Mfoot.html .yg-footbottom");

//获取
let  username=$("#username");   //用户名 手机号 邮箱等
let password=$("#password")       //第一页 的密码

let userphone=$("#userphone")
let password1=$("#password1")


//第一页登录时
$(".tologin").click(function(){

    let nametext=$.trim(username.val());
    let passwordtext=$.trim(password.val());
    let check7=$(".sevencheck").prop("checked");
    $.ajax({
        type:"post",
        url:"../php/login.php",
        data:{
            "username":nametext,
            "password":passwordtext
        },
        success(res){
            let result=JSON.parse(res);
        //  console.log(res["status"]);
         if(result["status"]=="success"){
            let regxx={"name":nametext,"password":passwordtext};
            let regxxstr=JSON.stringify(regxx);
            if(check7){
                Cookie.setItem("regname",regxxstr,7);
            }else{
                Cookie.setItem("regname",regxxstr);
            }        
            //   console.log(Cookie.getItem("regname"));
            location.href=`../html/loginmain.html?name=${nametext}`
              
         }else{
            $(".yzmcw1").css("display","block");
            $(".close").click(function(){
             $(".yzmcw1").css("display","none")
            });
            $(".closebutton").click(function(){
                $(".yzmcw1").css("display","none") 
            })
         }
           
        }
    })



})




//第二页登录时
$(".login-bottom").click(function(){
    
})




})