
$(function () {

    // document.querySelectorAll(".item").forEach(e => {
    //     let type=""; let middletype=""; let smalltype="";
    //     let img = e.querySelector("img").src; 
    //     let price = e.querySelector(".number").getAttribute("title").slice(5);
    //     let youhui = e.querySelector(".goods-price-offer").querySelector("i") ? e.querySelector(".goods-price-offer").querySelector("i").innerText : "null" ;
    //     let tit = e.querySelector(".p-name").querySelector("em").innerText;
    //     let titcon = e.querySelector(".p-name").querySelector("i").innerText;
    //     let turnover = e.querySelector(".m-r-20").querySelector("a").innerText; 
    //     let pinlun = e.querySelector(".m-r-10").querySelector("a").innerText; 
    //     let shorw = e.querySelector(".p-shop").querySelector("a").innerText;
    //     let shop = e.querySelector(".p-icons").innerText; 
    //     let yy = {type,middletype, smalltype,img, price, youhui, tit, tit, titcon, turnover, pinlun, shorw, shop };
    //     arr1.push(yy);
    // })
    let navul

    new Promise((reslove, reject) => {

        $(".modle-head").load("./model/Mhead-top.html");
        $(".modle-search").load("./model/Msearch.html", function () {
            navul = $(".yg-nav-shop");
            // 导航栏变化 划过显示背景白
            navul.css({
                        background:"#ffffff",
                        display:"none",
                        boxShadow:"0 0 2px #cc0"
                    });
                                    
                    navul.children("a").css("color","#000");

                    $(".yg-navshopall").hover(function(){
                        navul.css("display","block");
                        console.log(  navul.children("li").children("a").css("color","#000"));
                    },function(){
                        navul.css("display","none")
                    })


            reslove()
        });
    
    }).then(function(){
        return new Promise((reslove, reject)=>{
            $.ajax({
                type: "post",
                url: "../json/nav.json",
                success(res) {
                    //渲染一级导航
            
                    $.nav(navul,res);
                    reslove()
                    // reslove();
                }
            })
        })
    }).then(function(){
        return new Promise((reslove, reject)=>{
            $(".shopping-guide").on("mouseenter", ".shopping-guide-item", function () {
                $(this).css({
                    borderColor: "red",
                    borderBottom: "none"
                });
    
                $(this).find(".shopping-guide-titicon").animate({
                    "top": "-26px"
                }, 200);
    
                $(this).find(".shopping-guide-list").css("display", "block")
            });
    
            // 栏目划出
            $(".shopping-guide").on("mouseleave", ".shopping-guide-item", function () {
                $(this).css({
                    borderColor: "#cccccc",
                    borderBottom: "1px solid #cccccc"
                });
                $(this).find(".shopping-guide-titicon").animate({
                    "top": "0px"
                }, 200);
                $(this).find(".shopping-guide-list").css("display", "none")
            });
    
            // 收藏划入动画
            $(".detail-item").on("mouseenter", ".item-toCollection", function () {
                $(this).children(".icon-span1").animate({
                    "top": "-27px"
                });
            });
    
            // 收藏划出动画
            $(".detail-item").on("mouseleave", ".item-toCollection", function () {
                $(this).children(".icon-span1").animate({
                    "top": "0px"
                });
            });
    
            // input 聚焦 兄弟元素显示
            $("input").focus(function () {
                $(this).siblings("button").css("display", "block").parent().css("background", "#ffffff")
            })
    
            // 监听页面滚动 栏目定位
    
            $(document).scroll(function () {
                let sortHigt = $(".shopping-sort").offset().top;
                if (sortHigt <= 0) {
                    $(".shopping-sort").css({
                        position: "flex",
                        top: "0px"
                    })
                }
            })


            reslove()
        })
    }).then(function(){
        $(".model-foot").load("./model/Mfoot.html");
    })
   





})
