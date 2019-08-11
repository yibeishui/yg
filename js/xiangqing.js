$(function(){
    let navul;
    let arrjson1=Cookie.getItem("regname")?Cookie.getItem("regname"):`[]`;
    let regnames=JSON.parse(arrjson1);
    let iflogin=false;
    new Promise((reslove, reject) => {

        let arrjson=Cookie.getItem("zuji")?  Cookie.getItem("zuji"):`[]`;
        let zujiarr=JSON.parse(arrjson);
       if(zujiarr.length!=0){
        let zujilistres=   zujiarr.map(e=>{
               return `<li class="zuji-item" data-item="${e.id}"><a href="">
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
        $(".model-foot").load("./model/Mfoot.html .yg-footbottom", function () {
            $(".yg-footbottom").css("marginTop", "30px")
        })
  
     
        $(".modle-head").load("./model/Mhead-top.html",function(){
            if(regnames.length==0){
                iflogin=false;
            }else{
                iflogin=true;
                console.log(11,);
                
                $(".yg-iflogindiv").html(`<span>${regnames["name"]}</span><span class="huiyuan">暂无等级会员</span><span class="iconfont icon-down2"></span>`);
            }
            
        $(".tomain").html(`<span class="iconfont icon-shouye"></span><a href="">返回首页</a>`)
        $(".tomain").css("marginRight","10px").children().css("marginRight","5px")

        $(".tomain").hover(function(){
            $(this).css("color","red").find("a").css("color","red")
        },function(){
            $(this).css("color","#000").find("a").css("color","#000")
        })
        
        });
        $(".modle-search").load("./model/Msearch.html", function () {
            navul = $(".yg-nav-shop");
            $.headcar()
        });
        reslove()
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
                    // reslove();
                }
            })


        })
    }).then(function(){
        return new Promise((reslove, reject)=>{
            let url=decodeURI(location.search).slice(1).split("=")[1];
  
            
            $.ajax({
                type: "get",
                url: "../php/xiangqing.php",
                data:`id=${url}`,
                dataType:"json",
                success: function(re) {
                     $.xiangqing(re,$(".xiangqing-shop-moreinfo"))
                    
                }
           
            });
            $.ajax({
                type: "get",
                url: "../json/nav.json",//获取图片url
                // async: true,
                success: function(re) {
           
                    //渲染数据到节点
                    $res = re[1].list[0].smallimg.map(function(item) {
                        return `<li>
                                    <div class="small-img">
                                        <img src="${item}" />
                                    </div>
                                </li>`;
                    }).join('');
            
                    $('.animation03').html($res);
                    reslove()
            
          
           }
            //
            //放大镜插件使用：先渲染再调用插件
    
        });

        })
    }).then(function(){
console.log(111,$(".shop-buynumber"));
// 加减
let shopnum=1;
$(".shop-buynumber").on("click",".delenumber",function(){
if(shopnum<=1){
    shopnum=1;
}else{
    shopnum--;
    $(".shopnewnum").text(shopnum);
}
})


$(".shop-buynumber").on("click",".addnumber",function(){
    shopnum++;
    console.log(shopnum);
    $(".shopnewnum").text(shopnum);
})
// 加入购物车
$(".xiangqing-shop-moreinfo").on("click",".shop-moreinfo-tocar",function(){
   
    console.log($(".onenewprice").text());   
    $.ajax({
        type:"post",
        data:{
            "listid":$(".shop-moreinfo-title").data("item"),
             "price":$(".onenewprice").text(),
             "num":$("shopnewnum").text()*1
    },
        dataType:"json",
        url:"../php/xqtocar.php",
        success(res){


        }
    })
})


    // 插件放大镜使用     
    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
		width : 380,//图片放大后承载容器宽度
		height : 380,//图片放大后承载容器高度
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 3 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

        $.ajax({
            type:"post",
            data:'',
            dataType:"json",
            url:"../php/xiangqingtg.php",
            success(re){
                console.log(re);
                
                   re.forEach(e => {
                    let rr=   ` <li><a href="">
                       <img src="${e.img}" alt="" class="xiangqing-youlike-ul-img">
                       <p>￥${e.price}</p>
                      </a></li>`
                   $(".xiangqing-youlike-ul").append(rr)

                   });
            }
        })
    })


})