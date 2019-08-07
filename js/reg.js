$(function(){
    let fuxy=$("#fwxy");
    fuxy.prop("checked",true);  

$(".userphone-yzm").click(function(){
    let phone=$("#userphone").val().trim();   
    let phoneReg=/^1[3-9]\d{9}$/;
    let fuyCheck=fuxy.prop("checked")


   //手机号为空时  || 同意协议为空时

   if(phone==""){
    $(".phone-err").eq(0).css("display","block").text("手机号不能为空")
       if(!fuyCheck){  
        $(".phone-err").eq(1).css("display","block").text("请勾选服务协议")
       }else{
        $(".phone-err").eq(1).css("display","none")
       }

   }else{
    // 手机号部位空时
//  匹配正则   //不匹配正则   
// 勾选时 不勾选服务时
       if(!fuyCheck){
        $(".phone-err").eq(1).css("display","block").text("请勾选服务协议")
       }else{
        $(".phone-err").eq(1).css("display","none")
       }
      if(phoneReg.test(phone)){
        //   符合发送请求   1 已经存在时  2 不存在时
        $.ajax({
            type:"post",  
            url:"../php/reg.php",
            
            data:`phone=${phone}`,
            success(res){
// console.log(res);
// 成功=》发送验证码=》匹配验证码
let result=JSON.parse(res)

if(result.status=="error"){
    $(".phone-err").eq(0).css("display","block").text(`${result["msg"]}`)
}else{

    //没有注册过的 发送短信 弹出验证框
    //验证密码  立即注册发送后台写入msq
    


}


// 失败

            }
        })

      }else{
          $(".phone-err").eq(0).css("display","block").text("请输入正确的手机号");
         $("#userphone").css("color","#FF5789")
      }


   }
   
    
   
    
    

})


})