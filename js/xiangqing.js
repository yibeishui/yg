$(function(){
    let navul
    new Promise((reslove, reject) => {

        $(".modle-head").load("./model/Mhead-top.html",function(){
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
            $.ajax({
                type: "get",
                url: "../json/nav.json",//获取图片url
                // async: true,
                success: function(re) {
                //     <li>
                //     <div class="small-img">
                //         <img src="https://pic5.cnrmall.com/image/37/b2/37b21b5a9d7c848cd1fffa86f08dc6f1.jpg@60w_60h" />
                //     </div>
                // </li>
                    //渲染数据到节点
                    $res = re[1].list[0].smallimg.map(function(item) {
                        return `<li>
                                    <div class="small-img">
                                        <img src="${item}" />
                                    </div>
                                </li>`;
                    }).join('');
            
                    $('.animation03').html($res);
            
          
           }
            //
            //放大镜插件使用：先渲染再调用插件
    
        });

    // 插件放大镜使用

     
    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
		width : 380,//图片放大后承载容器宽度
		height : 380,//图片放大后承载容器高度
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 3 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);


        })
    })






})