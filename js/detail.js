
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
    let navul;
    new Promise((reslove, reject) => {
        $(".modle-head").load("./model/Mhead-top.html",function(){
            $(".tomain").html(`<span class="iconfont icon-shouye"></span><a href="./head.html">返回首页</a>`)
            $(".tomain").css("marginRight","10px").children().css("marginRight","5px")
            $(".tomain").hover(function(){
                $(this).css("color","red").find("a").css("color","red")
            },function(){
                $(this).css("color","#000").find("a").css("color","#000")
            })
        });
        $(".modle-search").load("./model/Msearch.html", function () {
            navul = $(".yg-nav-shop");                 
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
                    $.navto(navul);

                    $(".yg-totop").click(function(){
                        window.scrollTo(0,0)
                                             
                    })
                        // 导航栏变化 划过显示背景白
            navul.css({
                background:"#ffffff",
                display:"none",
                boxShadow:"0 0 2px #cc0"
            });
            navul.css("color","#000")    
            navul.children("li").children("a").css("color","#000");       
            $(".yg-navshopall").hover(function(){
                navul.css("display","block");

            },function(){
                navul.css("display","none")
            })
            navul.children("li").children("a").hover(function(){
                $(this).css("color","red")
            },function(){
                $(this).css("color","#000")
            })




            reslove()  
                }
            })
        })
    }).then(function(){
        return new Promise((reslove, reject)=>{
//渲染
let url=decodeURI(location.search).slice(1);
let res=[];
if(url.indexOf("&")){
   
   let url1= url.split("&");
  url1.forEach(el=>{
      res.push(el.split("=")[1])
  })
}else{
res.push(url.split("=")[1])
}
$(".shopping-guide-title").text(`"${res[res.length-1]}"`)

let ulhtml=res.map(e=>{
    return `<li class="shopping-guide-item fl">
    <div class="shopping-guide-tit">${e}
        <div class="shopping-guide-titicon">
            <div class="iconfont icon-down2"></div>
            <div class="iconfont icon-up2"></div>
        </div>
    </div>
    <!-- 分类 -->
    <ul class="shopping-guide-list">
        <li>
            <a href="">222</a>
        </li>
        <li>2222</li>
    </ul>
</li>`
}).join("")
$(".shopping-ul").html(ulhtml);


$.ajax({
    type:"post",
    url:"../php/toselect.php",
    data:{
        cont:res[res.length-1]
    },
    dataType:"json",
    success(re){
       console.log(re);
       
        
re.forEach(e=>{
 
      let  ullist=   ` <li data-item="${e.id}">
    <!-- 图片 -->
    <!-- 价格 -->
    <!-- 商品内容 -->
    <div class="list-div1">
        <a href="" class="detail-item-con">
            <img src="${e.img}" alt="">
            <p class="detail-item-price">
                <span class="detail-item-pricespan">￥${e.price}</span>
                <span class="detail-item-icon fr">${e.youhui}</span>
            </p>
            <p class="detail-item-title">
                <span>${e.tit}</span>
                <span>${e.titcon}</span>
            </p>
        </a>
    </div>


    <!-- 成交与评论 -->
    <div class="detail-item-estimate">
        <span>
            <span class="item-estimate-volume">${e.turnover}</span>笔成交</span>
        <span>
            <span class="item-estimate-Comments">${e.pinlun}</span>条评论</span>
    </div>

    <!-- 店铺 -->
    <p class="detail-item-shop">
        <a href="">${e.shorw}</a>
    </p>
    <!-- 自营店铺？ -->
    <p class="detail-item-autotrophy">
        <span>${e.shop}</span>
    </p>

    <!-- 收藏与加入购物车 -->
    <div class="detail-item-car">
        <div class="item-toCollection">
            <div class="icon-span1">
                <div class="iconfont icon-xinaixin"></div>
                <div class="iconfont icon-xin1"></div>
            </div>
            <span>收藏</span>
        </div>
        <div class="item-tocar">
            <span class="iconfont icon-jiarugouwuche"></span>加入购物车</div>
    </div>

</li>`

$(".detail-item").append(ullist)
})

$(".yeshunum").html(`<li class="fl">1</li>`)

//加入购物车
// $("")

$(".detail-item").on("click",".detail-item-con",function(e){
    e.preventDefault();   
    location.href=`xiangqing.html?tit=${ $(this).parent().parent().data("item")}`    
})
$(".detail-item").on("click",".item-tocar",function(){
    // console.log($(this).parent().siblings(".list-div1").find(".detail-item-pricespan").text().slice(1));
    $.ajax({
        type:"post",
        data:{
            "listid":$(this).parent().parent().data("item"),
             "price":$(this).parent().siblings(".list-div1").find(".detail-item-pricespan").text().slice(1)
    },
        dataType:"json",
        url:"../php/car.php",
        success(res){


        }
    })
})

// 
// $(".xiangqing-shop-moreinfo").on("click",".shop-moreinfo-tocar",function(){
   
//     console.log($(".onenewprice").text());   
//     $.ajax({
//         type:"post",
//         data:{
//             "listid":$(".shop-moreinfo-title").data("item"),
//              "price":$(".onenewprice").text()
//     },
//         dataType:"json",
//         url:"../php/car.php",
//         success(res){


//         }
//     })
// })
// // 
    }
})






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
