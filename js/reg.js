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
                                      "content":`[央广小品],您正在通过手机注册会员，验证码是:${msgCodeText}`,
                                      "title":"某某公司名称",
                                      "notiPhone":"138...880"
                                  },
                              
                                  error: function(XmlHttpRequest, textStatus, errorThrown) {
                                      alert("操作失败!");
                                  },
                                  success: function(result) {
                                      console.log(result) //console变量在ie低版本下不能用
                                      alert(result.showapi_res_code)
                                  }
                              });
                            //   短信验证  完

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