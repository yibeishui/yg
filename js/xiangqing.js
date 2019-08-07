$(function(){
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
         
        })
    })







    // let magnifier=$(".xiangqing-shopimg");

    //插件放大镜使用

//         $.ajax({
//         	// type: "get",
//         	url: "../json/nav.json",//获取图片url
//         	// async: true,
//         	success: function(re) {
//         	console.log(re[1].list[0].smallimg[0]);
            
//         		//渲染数据到节点
//         		$res = re[1].list[0].smallimg.map(function(item) {
//         			return `<li>
//         						<div class="small-img">
//         							<img src="${item}" />
//         						</div>
//         					</li>`;
//         		}).join('');
        
//                 $('.animation03').html($res);
      
// // console.log(re[1].list[0].smallimg);


      
//        }
//         //
//         //放大镜插件使用：先渲染再调用插件

//     });
    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
		width : 380,//图片放大后承载容器宽度

		height : 380,//图片放大后承载容器高度
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 3 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);


})