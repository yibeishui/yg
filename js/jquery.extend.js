(function ($) {
    $.extend({
        // 导航栏渲染 
        nav: function (navul) {
            $.ajax({
                type: "post",
                url: "../json/nav.json",
                success(res) {
                    //渲染一级导航
                    // re = res;
                    console.log(res);

                    res[0].one.forEach(e => {
                        let ll = '';
                        e.forEach(el => {
                            ll += `<a href="">${el}</a> / `
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
                                return `<dd><a href="">${ele}</a></dd>`
                            }).join("");
                            ss.append($(`<dl><dt><a href="">${el.twotitle}<span>></span></a></dt><div class="yg-nav-listdd">${ress}</div></dl>`))
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

                }
            });

        }
    })


})(jQuery)