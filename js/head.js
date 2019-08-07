
$(function () {
   
    let re;
    let msUl;
    let ulList;
    let navul

    //效果未实现 图片划过移动 标签划过颜色变红 ico图标未导入 点击事件跳转未实现
    new Promise((reslove, reject) => {
        $(".model-header").load("./model/Mhead-top.html");
        $(".model-search").load("./model/Msearch.html",function(){
            navul = $(".yg-nav-shop")
            
            reslove();
        });

    
       
    }).then(function(){
        return new Promise(function(reslove,reject){

            $.ajax({
                type: "post",
                url: "../json/nav.json",
                success(res) {
                    //渲染一级导航
                    re = res;
                    // let navul = $(".yg-nav-shop");
                    console.log(navul);
                    $.nav(navul,res);

                    reslove()
                    // reslove();
                }
            })


           


     
        })
    }).then(function () {
        return new Promise(function (reslove, reject) {
  
            //秒杀区的渲染
            // console.log(re[0].miaosha);
            msUl = $('.yg-miaosha-ul');
            re[0].miaosha.forEach((e, ind) => {
                if (ind < 18) {
                    let msli = `<li>
                                <a>
                                    <img src="${e.img}"/>
                                    <p class="item-p1">${e.con}</p>
                                    <p><span class="item-newprice">￥${e.newprice}.00</span><span class="item-oldprice">￥${e.oldprice}.00</span></p>
                                </a>
                            </li>`
                    msUl.append(msli);
                }
            })
            reslove();
        })
    }).then(function () {
        //点击《 》切换轮播 msUl
        return new Promise(function (reslove, reject) {
            let t = 0;
            $('.toprev').click(function (e) {
                e.preventDefault();
                // msUl.stop().animate({"left":"-1210px"},1000)
                t--;
                if (t < 0) {
                    t = 1;
                    msUl.css("left", "-2420px")
                }
                msUl.stop().animate({ "left": `-${t * 1210}px` }, 1000);
                // console.log(t);
            })
            $('.tonext').click(function (e) {
                e.preventDefault();
                t++;
                if (t > 2) {
                    t = 1;
                    msUl.css("left", "0");
                }
                // console.log(t);
                msUl.stop().animate({ "left": `-${t * 1210}px` }, 1000);
            })

            $('.yg-miaosha-con').hover(function () {
                $('.yg-miaosha-div').css('display', 'block');
            }, function () {
                $('.yg-miaosha-div').css('display', 'none');
            })
            $('.yg-miaosha-div a').hover(function () {
                $(this).css("background", "#999999")
            }, function () {
                $(this).css("background", "rgba(0,0,0,0.2)")
            })

            // 缺：秒杀倒计时渲染
            reslove();

        })

    }).then(function () {
        return new Promise((reslove, reject) => {
            //食品酒水渲染
            $('.yg-shopbigimg').each((ind, ele) => {
                // console.log(ind,ele);
                $(ele).append(`<img src="${re[0].bigimg[ind]}" alt=""> `)

            });
            $('.yg-shopsmall').each((ind, el) => {
                let rr = `<a href="">
                     <div>
                        <h4>${re[0].smallcon[ind].p1}</h4>
                        <p>${re[0].smallcon[ind].p2}</p>
                    </div>
                    <img src="${re[0].smallcon[ind].img}" alt="">
                </a>`

                $(el).append(rr)
            })

            $('.yg-shopsmallimg').each((ind, el) => {
                // console.log($(el));

                let rr = `<img src="${re[0].smallimg[ind]}"/>`
                $(el).append(rr)
            })

            reslove();
        })


    }).then(function () {
        //更多喜欢推荐渲染
        ulList = $(".yg-youlike-more");
        re[0].tjlist.forEach(e => {
            let res = ` <li class="fl"><a href="" class="yg-morelist">
            <img src="${e.img}" alt="">
            <p>${e.tit}</p>
            <div><span class="yg-morelist-price">￥${e.price}.00</span></div>
        </a></li>`;
            ulList.append(res);
        })


        // 脚部模块引入
        $(".model-foot").load("./model/Mfoot.html");


    })






})