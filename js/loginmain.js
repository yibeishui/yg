$(function(){
    let username=JSON.parse(Cookie.getItem("regname"));

    
    $(".model-header").load("./model/Mhead-top.html",function(){
    
        $(".yg-iflogindiv").html(`<span>${username.name}</span><span class="iconfont icon-down2"></span>`);
        $(".tomain").html(`<span class="iconfont icon-shouye"></span><a href="head.html">返回首页</a>`)
        $(".tomain").css("marginRight","10px").children().css("marginRight","5px")
        $(".tomain").hover(function(){
            $(this).css("color","red").find("a").css("color","red")
        },function(){
            $(this).css("color","#000").find("a").css("color","#000")
        })
    })
})