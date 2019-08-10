
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
    let arrjson1=Cookie.getItem("regname")?Cookie.getItem("regname"):`[]`;
    let regnames=JSON.parse(arrjson1);
    let iflogin=false;
    new Promise((reslove, reject) => {
        $(".modle-head").load("./model/Mhead-top.html", function () {
            if(regnames.length==0){
                iflogin=false;
            }else{
                iflogin=true;
                console.log(11,);
                
                $(".yg-iflogindiv").html(`<span>${regnames["name"]}</span><span class="huiyuan">暂无等级会员</span><span class="iconfont icon-down2"></span>`);
            }
            $(".tomain").html(`<span class="iconfont icon-shouye"></span><a href="./head.html">返回首页</a>`)
            $(".tomain").css("marginRight", "10px").children().css("marginRight", "5px")
            $(".tomain").hover(function () {

                $(this).css("color", "red").find("a").css("color", "red")
            }, function () {
                $(this).css("color", "#000").find("a").css("color", "#000")
            })
        });
        $(".modle-search").load("./model/Msearch.html", function () {
            navul = $(".yg-nav-shop");
            reslove()
        });

    }).then(function () {
        return new Promise((reslove, reject) => {
            $.ajax({
                type: "post",
                url: "../json/nav.json",
                success(res) {
                    //渲染一级导航        
                    $.nav(navul, res);
                    $.navto(navul);
                    $(".yg-totop").click(function () {
                        window.scrollTo(0, 0)
                    })
                    // 导航栏变化 划过显示背景白
                    navul.css({
                        background: "#ffffff",
                        display: "none",
                        boxShadow: "0 0 2px #cc0"
                    });
                    navul.css("color", "#000")
                    navul.children("li").children("a").css("color", "#000");
                    $(".yg-navshopall").hover(function () {
                        navul.css("display", "block");

                    }, function () {
                        navul.css("display", "none")
                    })
                    navul.children("li").children("a").hover(function () {
                        $(this).css("color", "red")
                    }, function () {
                        $(this).css("color", "#000")
                    })
                    reslove()
                }
            })
        })
    }).then(function () {
        return new Promise((reslove, reject) => {
            //渲染
            let url = decodeURI(location.search).slice(1);
            let res = [];
            if (url.indexOf("&")) {
                let url1 = url.split("&");
                url1.forEach(el => {
                    res.push(el.split("=")[1])
                })
            } else {
                res.push(url.split("=")[1])
            }
            $(".shopping-guide-title").text(`"${res[res.length - 1]}"`)

            let ulhtml = res.map(e => {
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

function all(php,paixu,n){
    $(".detail-item").html("");
    $(".yeshunum").html("");
   window.scrollTo(0,0);

    $.ajax({
        type: "post",
        url: php,
        data: {
            cont: res[res.length - 1],
       
            paixu       
        },
        dataType: "json",
        success(re) {
            // console.log(re);
            // 前20渲染
            let selere=re.splice(n,20);
            console.log(selere);
            
            selere.forEach(e => {

                let ullist = ` <li data-item="${e.id}">
                <!-- 图片 -->
                <!-- 价格 -->
                <!-- 商品内容 -->
                <div class="list-div1">
                    <a href="" class="detail-item-con">
                        <img src="${e.img}" alt="" class="detail-img">
                        <p class="detail-item-price">
                            <span class="detail-item-pricespan">￥${e.price}</span>
                            <span class="detail-item-icon fr">${e.youhui}</span>
                        </p>
                        <p class="detail-item-title">
                            <span class="detail-item-titspan">${e.tit}</span>
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
            //   页数的渲染
            for (var i = 0; i< re.length/20; i++) {                   
            $(".yeshunum").append(`<li class="fl yeshuli">${i+1}</li>`)
            }


        }
    })
}
   all("../php/allselect.php","no",0); 
          
   let fff=true;      

 //   页面足迹渲染


let arrjson=Cookie.getItem("zuji")?  Cookie.getItem("zuji"):`[]`;
  let zujiarr=JSON.parse(arrjson);
 if(zujiarr.length!=0){
  let zujilistres=   zujiarr.map(e=>{
         return `<li class="zuji-item" data-item=""><a href="">
         <div><img src="${e.img}" alt="" class="zujiimg"></div>
         <p class="zuji-p1">${e.tit}</p>
         <p class="zuji-p2">${e.price}</p>
     </a></li>`
     }).join("");
     let zujidiv=` <div class="yg-content zuji-con">
     <div class="zuji-h2">我的足迹</div>
     <ul>
        ${zujilistres}
     </ul></div>`
 $(".zuji").html(zujidiv)

 }else{}
       //跳转详情页  cookie记录足迹

       $(".detail-item").on("click", ".detail-item-con", function (e) {
        e.preventDefault();
        let itemid=$(this).parent().parent().data("item");
         
         let itemstr={
             id:itemid,
             tit:$(this).find(".detail-item-titspan").text(),
             img:$(this).find(".detail-img").attr("src"),
             price:$(this).find(".detail-item-pricespan").text()
         }
          zujiarr.push(itemstr);
          Cookie.setItem("zuji",JSON.stringify(zujiarr));
        
        location.href = `xiangqing.html?tit=${itemid}`
      })

   
      
       $(".detail-item").on("click", ".item-tocar", function () {
        // 加入购物车
        $.ajax({
            type: "post",
            data: {
                "listid": $(this).parent().parent().data("item"),
                "price": $(this).parent().siblings(".list-div1").find(".detail-item-pricespan").text().slice(1)
            },
            dataType: "json",
            url: "../php/car.php",
            success(res) {

            }
        })
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
            });

            // 页面点击时(第几页) 渲染页面  、、 发送哪个请求???
$(".yeshunum").on("click",".yeshuli",function(){
    let yeindex=$(this).index()+1;
    $(this).css({
        background:"#ffffff",
        color:"red"
    }).siblings().css({
        background:"#F7F7F7",
        color:"#AAA"
    });
    all("../php/allselect.php",fff,yeindex); 
    
})

            // 价格排序   之前为空，重新渲染
            $(".selectprice").click(function(){
                fff=!fff;
                console.log(fff);               
                all("../php/allselect.php",fff,0); 
            })
    





            reslove()
        })
    }).then(function () {
        $(".model-foot").load("./model/Mfoot.html");
    })






})
