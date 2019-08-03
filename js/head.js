$(function () {
    let navul = $(".yg-nav-shop");
    let re;
    let msUl;
    new Promise((reslove, reject) => {
        $.ajax({
            type: "post",
            url: "../json/nav.json",
            success(res) {
                //渲染一级导航
                re = res;
                res[0].one.forEach(e => {
                    let ll = '';
                    e.forEach(el => {
                        ll += el + " / "
                    })
                    let lll = ll.slice(0, -2);
                    navul.append($(`<li><a href="">${lll}</a><div class="yg-nav-listtit"></div></li>`));
                    reslove();
                })
            }
        })
    }).then(function () {
        return new Promise(function (reslove, reject) {
            //渲染二级导航
            $(".yg-nav-listtit").each((ind, e) => {
                let index = ind;
                let ss = $(`<div class="fl yg-nav-div1"></div>`)
                re[0].two[index].forEach(el => {
                    let res;

                    res = el.twocon.map(ele => {
                        return `<dd><a href="">${ele}</a></dd>`
                    }).join("");
                    ss.append($(`<dl><dt><a href="">${el.twotitle}<span>></span></a></dt><div class="yg-nav-listdd">${res}</div></dl>`))
                })
                $(e).append(ss);
                $(e).append(`<div class="yg-nav-listdiv3 fr"><div>`);
                //渲染二级导航的图片
                let twoimg = re[0].twoimg[index].map(ee => {
                    return `<a href=""><img src="${ee}" /></a>`
                })
                $(".yg-nav-listdiv3").eq(index).html(twoimg);
            })
            //二级导航显示隐藏
            navul.on("mouseenter", "li", function () {
                let ind = $(this).index();
                $(".yg-nav-listtit").eq(ind).css("display", "block");
            })
            navul.on("mouseleave", "li", function () {

                $(".yg-nav-listtit").css("display", "none");
            })
            //秒杀区的渲染
            console.log(re[0].miaosha);
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
            reslove();

        })

    }).then(function () {
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
                // console.log(re[0].smallcon[ind].img);
                
            $(el).append(rr)
        })

        $('.yg-shopsmallimg').each((ind, el) => {
            let rr = `<img src="${res[0].smallimg[ind]}"/>`               
            $(el).append(rr)
        })


    })






})