(function ($) {
    $.extend({
        // 导航栏渲染 
        nav: function (navul, res) {
            // $.ajax({
            //     type: "post",
            //     url: "../json/nav.json",
            //     success(res) {
            //渲染一级导航
            // re = res;
            console.log(navul);

            res[0].one.forEach(e => {
                let ll = '';
                e.forEach(el => {
                    ll += `<a href="" class="nav1-a1">${el}</a> / `
                })
                let lll = ll.slice(0, -2);
                navul.append($(`<li>${lll}<div class="yg-nav-listtit"></div></li>`));

            })


            //渲染二级导航
            $(".yg-nav-listtit").each((ind, e) => {
                let index = ind;
                let ss = $(`<div class="fl yg-nav-div1"></div>`);
                res[0].two[index].forEach(el => {
                    let ress;

                    ress = el.twocon.map(ele => {
                        return `<dd><a href="" class="nav1-a2">${ele}</a></dd>`
                    }).join("");
                    ss.append($(`<dl><dt><a href="" class="nav1-a11">${el.twotitle}<span>></span></a></dt><div class="yg-nav-listdd">${ress}</div></dl>`))
                })
                $(e).append(ss);
                $(e).append(`<div class="yg-nav-listdiv3 fr"><div>`);
                //渲染二级导航的图片
                let twoimg = res[0].twoimg[index].map(ee => {
                    return `<a href=""><img src="${ee}" /></a>`
                })
                $(".yg-nav-listdiv3").eq(index).html(twoimg);
            });
            //二级导航显示隐藏
            navul.on("mouseenter", "li", function () {
                let ind = $(this).index();
                $(".yg-nav-listtit").eq(ind).css("display", "block");
            });
            navul.on("mouseleave", "li", function () {

                $(".yg-nav-listtit").css("display", "none");
            });

        },
        navto: function (navul) {
            navul.on("click", ".nav1-a1", function (e) {
                e.preventDefault();
                console.log($(this).text());
                // var dataUrl = JSON.stringify(data)

                location.href = `./detail.html?tit1=${($(this).text())}`

            })
            navul.on("click", ".nav1-a11", function (e) {
                e.preventDefault();
                console.log($(this).text().slice(0, -1));
                location.href = `./detail.html?tit1=${$(this).text().slice(0, -1)}`

            })
            navul.on("click", ".nav1-a2", function (e) {
                e.preventDefault();
                console.log($(this).text().slice(0, -1));
                location.href = `./detail.html?tit1=${$(this).parent().parent().siblings().children("a").text().slice(0, -1)}&tit2=${$(this).text()}`

            })
        },
        // settime:function(endtime){
        //    let str;
        //     let timr = setInterval(function(){
        //        let timr1=new Date();
        //        let etime=new Date(endtime)-timr1;
        //        if(etime==0){
        //            clearInterval(timr);
        //        }
        //      let shi=("0"+Math.floor(etime/1000/60/60%24)).slice(-2);
        //      let fen=("0"+Math.floor(etime/1000/60%60)).slice(-2);
        //      let miao=("0"+Math.floor(etime/1000%60)).slice(-2);
        //      str=`${shi}时${fen}分${miao}秒`;
            
             
             
        //    },1000)
      
        // }
        // ,
        xiangqing: function (re, tt) {
           
        //   console.log(shi);
      
       
      
             
            let uu = `<div class="shop-moreinfo-title"data-item="${re[0].id}">
                <h3>${re[0].tit}</h3>
                <p>${re[0].titcon}</p>
                </div>
                <div>
                <!-- 活动有 其他无 -->
                <div class="shop-moreinfo-huodong">
                    <div>
                        <span class="iconfont icon-shizhong"></span>秒杀
                    </div>
                    <div>
                        <span class="iconfont icon-shizhong1"></span>距结束
                        <div class="endtime"></div>
                    </div>
                </div>
                <div class="shop-moreinfo-price">
                    <dl>
                        <dt>价格</dt>
                        <dd class="shop-moreinfo-newprice">
                            <span>￥</span><i class="onenewprice">${re[0].price}</i></dd>
                        <dd class="shop-moreinfo-oldprice">￥168.00</dd>
                    </dl>
                </div>
                <!-- 物流 -->
                <div class="shop-moreinfo-logistics">
                    <dl>
                        <dt>物流</dt>
                        <dd>配送至</dd>
                        <dd></dd>
                        <dd>有货</dd>
                        <dd>免运费</dd>
                    </dl>
                </div>
                <!-- 服务 -->
                <div class="shop-moreinfo-serve">
                    <dl>
                        <dt>服务</dt>
                        <dd>非自营由
                            <span></span>发货，并提供售后服务。</dd>
                    </dl>
                </div>
                <!-- 数量 -->
                <div class="shop-moreinfo-number">
                    <dl>
                        <dt>数量</dt>
                        <dd class="shop-buynumber">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>

                        </dd>
                        <dd>件</dd>
                        <dd class="shop-moreinfokucun">（库存100件）</dd>
                    </dl>
                </div>
                <!-- 加入购物车 -->
                <div class="shop-moreinfo-tocar">
                    <span class="shop-buynow">立即购买</span>
                    <span class="shop-addcar">
                        <span class="iconfont icon-gouwuche"></span>加入购物车</span>
                </div>
                <!-- 服务承诺 -->
                <div class="shop-chengnuo">
                    <dl>
                        <dt>服务承诺</dt>
                        <dd><span class="iconfont icon-xin"></span>15天无理由退换货，30天只换不修</dd>
                    </dl>
                </div>
                </div>`

            tt.append(uu);
            let str;
            let timr = setInterval(function(){
               let timr1=new Date();
               let etime=new Date(re[0].endtime)-timr1;
               if(etime<=0){
                   clearInterval(timr);
               }
             let shi=("0"+Math.floor(etime/1000/60/60%24)).slice(-2);
             let fen=("0"+Math.floor(etime/1000/60%60)).slice(-2);
             let miao=("0"+Math.floor(etime/1000%60)).slice(-2);
             str=`${shi}时${fen}分${miao}秒`;
             $(".endtime").text(str)   
           },1000)
      

        }

    });



    // }
    // })


})(jQuery)