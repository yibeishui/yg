$(function () {
    let fuxy = $("#fwxy");
    fuxy.prop("checked", true);

    $(".userphone-yzm").click(function () {
        let phone = $("#userphone").val().trim();
        let phoneReg = /^1[3-9]\d{9}$/;
        let fuyCheck = fuxy.prop("checked")


        //手机号为空时  || 同意协议为空时

        if (phone == "") {
            $(".phone-err").eq(0).css("display", "block").text("手机号不能为空")
            if (!fuyCheck) {
                $(".phone-err").eq(1).css("display", "block").text("请勾选服务协议")
            } else {
                $(".phone-err").eq(1).css("display", "none")
            }

        } else {
            // 手机号部位空时
            //  匹配正则   //不匹配正则   
            // 勾选时 不勾选服务时
            if (!fuyCheck) {
                $(".phone-err").eq(1).css("display", "block").text("请勾选服务协议")
            } else {
                $(".phone-err").eq(1).css("display", "none")
            }
            if (phoneReg.test(phone)) {
                //   符合发送请求   1 已经存在时  2 不存在时
                $.ajax({
                    type: "post",
                    url: "../php/reg.php",
                    data: `phone=${phone}`,
                    success(res) {

                        // 成功=》发送验证码=》匹配验证码

                        console.log(res);
                        if (res == "success") {

                            // 短信验证  始
                            // 5c341f6e8810402cb0f880bc20eed529 短信密钥  102033 appi
                          var msgCodeText = parseInt(Math.random() * 1000000);
                            function formatterDateTime() {

                                var date=new Date()
                                var month=date.getMonth() + 1
                                      var datetime = date.getFullYear()
                                              + ""// "年"
                                              + (month >= 10 ? month : "0"+ month)
                                              + ""// "月"
                                              + (date.getDate() < 10 ? "0" + date.getDate() : date
                                                      .getDate())
                                              + ""
                                              + (date.getHours() < 10 ? "0" + date.getHours() : date
                                                      .getHours())
                                              + ""
                                              + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                                                      .getMinutes())
                                              + ""
                                              + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                                                      .getSeconds());
                                      return datetime;
                                  }
                              
                              $.ajax({
                                  type: 'post',
                                  url: 'http://route.showapi.com/28-2',
                                  dataType: 'json',
                                  data: {
                                      "showapi_timestamp": formatterDateTime(),
                                      "showapi_appid": '102033', //这里需要改成自己的appid
                                      "showapi_sign": '5c341f6e8810402cb0f880bc20eed529',  //这里需要改成自己的应用的密钥secret
                                      "content":`{"code":[央广小品],您正在通过手机注册会员，验证码是:${msgCodeText}}`,
                                      "mobile": phone,  
                                      "tNum": "T150606060601",
                                     
                                  },
                              
                                  error: function(XmlHttpRequest, textStatus, errorThrown) {
                                      alert("操作失败!");
                                  },
                                  success: function(result) {
                                      console.log(result) //console变量在ie低版本下不能用
                                      alert(result.showapi_res_code)
                                  }
                              });
                            let yzmtimeout=$(".reg-yzmtimeout");

                            var count = 60;
                            var timer = setInterval(function() {
                                count--;
                                if (count <= 0) {
                                   $(".reg-yzmtime").html("<span class='timerspan'>重新获取动态码</span>");
                                    clearInterval(timer);
                                } else {
                                    yzmtimeout.html(count);
                                }
                            }, 1000);





                            //   短信验证  完
                            $(".reg-usercontent").css("display","none");
                            $(".reg-userreg").css("display","block");
                            // 动态码
                            let yzmreg=/^\d{6}$/;
                            let yzm;
                            // false
                            let yzmbloon=false;
                            // 验证码错误或者超过时间后
                            setTimeout(function(){
                                yzmbloon=false;
                                $(".yzmcw1").css("display","block");
                                $(".close").click(function(){
                                 $(".yzmcw1").css("display","none")
                                });
                                $(".closebutton").click(function(){
                                    $(".yzmcw1").css("display","none") 
                                })
                               },
                            36000000);

                        
                       $("#dxyzm").blur(function(){
                            yzm=$(this).val().trim();
                           if(yzm==""){
                               $(this).css("color","#FF5B57").siblings("div").text("短信动态码不能为空").css("display","block")  ;
                               yzmbloon=false;
                           }else{
                               if(!yzmreg.test(yzm)){
                                yzmbloon=false;
                                $(this).css("color","#FF5B57").siblings("div").text("短信动态码错误").css("display","block")
                               }else{
                                   if(yzm!=String(msgCodeText)){
                                    yzmbloon=false; 
                                   }else{
                                    yzmbloon=true;
                                   }
                                $(this).css("color","#000").siblings("div").css("display","none")  ;
                                
                               }
                           }

                       })
                            // 设置密码 6-20个字符
                            let passwork1reg=/^[a-zA-Z0-9]{6,20}$/;
                            let passwork1;
                            let passwork1bloon=false;
                            $("#passwork1").blur(function(){
                                 passwork1=$(this).val().trim();
                                if(passwork1==""){
                                    passwork1bloon=false;
                                    $(this).css("color","#FF5B57").siblings("div").text("密码不能为空").css("display","block")  
                                }else{
                                    if(!passwork1reg.test(passwork1)){
                                        passwork1bloon=false;
                                        $(this).css("color","#FF5B57").siblings("div").text("密码长度应在6-20个字符之间").css("display","block")                                        
                                    }else{
                                        passwork1bloon=true;
                                        $(this).css("color","#000").siblings("div").css("display","none")  
                                       }
                                }
                                
                            })
                            // q确认密码
                            let passwork2;
                            let passwork2bloon=false;
                            $("#passwork2").blur(function(){
                                passwork2=$(this).val().trim();
                               if(passwork2==""){
                                passwork2bloon=false;
                                   $(this).css("color","#FF5B57").siblings("div").text("请再次输入密码").css("display","block")  
                               }else{
                                   if(passwork2!=passwork1){
                                    passwork2bloon=false;
                                       $(this).css("color","#FF5B57").siblings("div").text("两次输入的密码不一致").css("display","block")                                        
                                   }else{
                                    passwork2bloon=true;
                                       $(this).css("color","#000").siblings("div").css("display","none")  
                                      }
                               }
                               
                           })

                         // 如果验证码 密码都正确

                          $(".reg-ok").click(function(){
                              if(yzm!=String(msgCodeText)){
                                $(".yzmcw1").css("display","block");
                                $(".close").click(function(){
                                 $(".yzmcw1").css("display","none")
                                });
                                $(".closebutton").click(function(){
                                    $(".yzmcw1").css("display","none") 
                                })
                              }
                              else if(yzmbloon&&passwork1bloon&&passwork2bloon){
                              
                               $.ajax({
                                   type:"post",
                                   data:{
                                       phone:`${phone}`,
                                       passwork:`${passwork1}`
                                   },
                                   url:"../php/okreg.php",
                                   success(res){
                                       console.log(res);
                                     let result=  JSON.parse(res);
                                     if(result["status"]=="success"){
                                        window.location.href="http://localhost/gityg/yg/html/login.html";
                                     }
                                       

                                   }
                               })                      
                                  
                              }else{
                                
                                  
                              }
                          })







                        } else {
                            $(".phone-err").eq(0).css("display", "block").text(`${res}`)
                        }

                    }
                })

            } else {
                $(".phone-err").eq(0).css("display", "block").text("请输入正确的手机号");
                $("#userphone").css("color", "#FF5789")
            }


        }






    })


})