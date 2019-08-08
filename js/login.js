$(function () {

    // 默认情况
    $(".userlogin-tousername").css("left", "0px");
    $(".login-modes-active").css("height", $(".login-modes-div").eq(0).height() + 40)

    // 点击切换不同方式登陆
    $(".login-modes").click(function (e) {
        e.preventDefault();
        let ind = $(this).index();
        let divh = $(".login-modes-div").eq(ind).height();
        $(this).addClass("login-mode-active").siblings().removeClass("login-mode-active");
        $(".login-modes-active").animate({ "height": `${divh + 40}` });
        $(".login-modes-div").eq(ind).siblings().animate({ "left": "-346px" }, 300, function () {
            $(".login-modes-div").eq(ind).animate({ "left": "0px" }, 300)
        })
    })

    $(".module-foot").load("./model/Mfoot.html .yg-footbottom");

    //获取
    let username = $("#username");   //用户名 手机号 邮箱等
    let password = $("#password")       //第一页 的密码



    //第一页登录时
    $(".tologin").click(function () {

        let nametext = $.trim(username.val());
        let passwordtext = $.trim(password.val());
        let check7 = $(".sevencheck").prop("checked");
        $.ajax({
            type: "post",
            url: "../php/login.php",
            data: {
                "username": nametext,
                "password": passwordtext
            },
            success(res) {
                let result = JSON.parse(res);
                //  console.log(res["status"]);
                if (result["status"] == "success") {
                    let regxx = { "name": nametext, "password": passwordtext };
                    let regxxstr = JSON.stringify(regxx);
                    if (check7) {
                        Cookie.setItem("regname", regxxstr, 7);
                    } else {
                        Cookie.setItem("regname", regxxstr);
                    }
                    //   console.log(Cookie.getItem("regname"));
                    location.href = `../html/loginmain.html?name=${nametext}`

                } else {
                    $(".yzmcw1").css("display", "block");
                    $(".close").click(function () {
                        $(".yzmcw1").css("display", "none")
                    });
                    $(".closebutton").click(function () {
                        $(".yzmcw1").css("display", "none")
                    })
                }

            }
        })



    })



    let userphone = $("#userphone")
    let password1 = $("#password1")
    let phoneReg = /^1[3-9]\d{9}$/;
    let ptext = false;
    let phonetext
    //第二页登录时
    userphone.blur(function () {
        phonetext = $.trim(userphone.val());
        if (phonetext == "") {
            ptext = false;
            $(this).parent().css("border", "1px solid #e93854").siblings("label").css({ "borderRight": "1px solid #e93854", "background": "#e93854", "opacity": "0.5" })
            $(".tologin-div").css("display", "block").text("手机号不能为空")
        } else if (!phoneReg.test(phonetext)) {
            ptext = false;
            $(".tologin-div").css("display", "block").text("手机号格式不正确")
        } else {
            ptext = true;
            $(".tologin-div").css("display", "none");

        }

    })
    var msgCodeText;
    $(".tologin1").click(function () {
        if (ptext) {
            // 短信验证  始
            // 5c341f6e8810402cb0f880bc20eed529 短信密钥  102033 appi
            msgCodeText = parseInt(Math.random() * 1000000);
            console.log(msgCodeText);

            // function formatterDateTime() {

            //     var date = new Date()
            //     var month = date.getMonth() + 1
            //     var datetime = date.getFullYear()
            //         + ""// "年"
            //         + (month >= 10 ? month : "0" + month)
            //         + ""// "月"
            //         + (date.getDate() < 10 ? "0" + date.getDate() : date
            //             .getDate())
            //         + ""
            //         + (date.getHours() < 10 ? "0" + date.getHours() : date
            //             .getHours())
            //         + ""
            //         + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            //             .getMinutes())
            //         + ""
            //         + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            //             .getSeconds());
            //     return datetime;
            // }

            // $.ajax({
            //     type: 'post',
            //     url: 'http://route.showapi.com/28-1',
            //     dataType: 'json',
            //     data: {
            //         "showapi_timestamp": formatterDateTime(),
            //         "showapi_appid": '102033', //这里需要改成自己的appid
            //         "showapi_sign": '5c341f6e8810402cb0f880bc20eed529',  //这里需要改成自己的应用的密钥secret
            //         "mobile": phone,
            //         "content": `{"code":${msgCodeText},"minute":"3","comName":"央广小品"}`,
            //         "tNum": "T150606060601",
            //         "big_msg": ""

            //     },

            //     error: function (XmlHttpRequest, textStatus, errorThrown) {
            //         alert("操作失败!");
            //     },
            //     success: function (result) {
            //         console.log(result) //console变量在ie低版本下不能用
            //         //   alert(result.showapi_res_code)
            //     }
            // });

            //   短信验证  完
            let yzmtimeout = $(".tologin-time");

            var count = 60;
            var timer = setInterval(function () {
                count--;
                if (count <= 0) {
                    yzmtimeout.html("");
                    clearInterval(timer);
                } else {
                    yzmtimeout.html(`您可以在<span>${count}</span>秒后再次获取验证码`);
                }
            }, 1000);
            $(".login1-p1").css("display", "block")

        }





    })



    let msgreg = /^[0-9]{6}$/;

    $(".login-bottom").click(function () {

        let passwordtext = $.trim(password1.val());

        if (passwordtext == "") {
            // ptext=false;
            $(this).parent().css("border", "1px solid #e93854").siblings("label").css({ "borderRight": "1px solid #e93854", "background": "#e93854", "opacity": "0.5" })
            $(".tologin-div1").css("display", "block").text("验证码不能为空")
        } else if (!msgreg.test(passwordtext)) {
            // ptext=false;
            $(".tologin-div1").css("display", "block").text("验证码格式不正确")
        } else {
            // ptext=true;
            let yzmbloon = true;
            // 验证码错误或者超过时间后
            setTimeout(function () {
                yzmbloon = false;
                $(".yzmcw1").css("display", "block");
                $(".close").click(function () {
                    $(".yzmcw1").css("display", "none")
                });
                $(".closebutton").click(function () {
                    $(".yzmcw1").css("display", "none")
                })
            },
                36000000);

            $(".tologin-div1").css("display", "none");
            if (passwordtext == msgCodeText && yzmbloon) {
                $.ajax({
                    type: "post",
                    url: "../php/reg.php",
                    data: {
                        phone: phonetext
                    },

                    success(res) {
                        console.log(res);
                        if (res == "用户已存在") {
                            let regxx = { "name": phonetext};
                            let regxxstr = JSON.stringify(regxx);
                            
                                Cookie.setItem("regname", regxxstr);
                            location.href = `../html/loginmain.html`
                        } else {
                            $(".yzmcw1").css("display", "block");
                            $(".close").click(function () {
                                $(".yzmcw1").css("display", "none")
                            });
                            $(".closebutton").click(function () {
                                $(".yzmcw1").css("display", "none")
                            })
                        }

                    }
                })


            }


        }


    })




})