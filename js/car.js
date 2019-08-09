$(function () {
    // let allres;
    // let allprice;
    // style="opacity: 0.3
    $(".car-content-topright li:not(:first)").css("opacity", "0.3");

    // $.ajax({
    //     type: "post",
    //     data: "",
    //     url: "../php/getcar.php",
    //     dataType: "json",
    //     success(res) {
    //         let car = $(".car0");
    //         car.html("");
    //         console.log(res);
    //         //    allres=res;

    //             if (res.length == 0) {
    //                 console.log(1);

    //                 let conten = `<div class="car-noshop">
    //                 <div></div>
    //                 <div>
    //                     <p>您的购物车还没有商品</p>
    //                     <p class="car-tobuy">
    //                         <a href="">
    //                             <img src="../images/fh.gif" alt=""> 马上去购物
    //                         </a>
    //                         <a href="">
    //                             <img src="../images/xx.gif" alt=""> 查看自己的订单
    //                         </a>
    //                     </p>
    //                 </div>
    //             </div> `
    //                 car.html(conten)


    //             } else {
    //     let allnum = 0 ;



    //     res.forEach(ele => {
    //         allnum += (ele.num)*1

    //     });

    //                 let uu = res.map(e => {
    //                     return `<li  data-item=${e.listid}>

    //                 <p class="car-list-merchant">
    //                     <input type="checkbox" class="shopcheck">${e.shorw}
    //                 </p>

    //                 <!-- 根据店铺 相关商品生成div -->
    //                 <div class="shops">
    //                     <!-- 多选框 -->
    //                     <input type="checkbox"  ${e.isActive == 1 ? "checked" : ""} class="onecheck">
    //                     <!-- 商品 图片与名称 -->
    //                     <div class="shop-con">
    //                         <img src="${e.img}" alt="">
    //                         <p>${e.tit}</p>
    //                     </div>
    //                     <!-- 数量 -->
    //                     <div class="shop-number">
    //                         <span class="removenumber">-</span>
    //                         <span class="numbers">${e.num}</span>
    //                         <span class="addnumber">+</span>
    //                     </div>
    //                     <!-- 价格 -->
    //                     <div class="shop-price"><span class="shopprice-span">￥${e.price}</span></div>
    //                     <!-- 优惠 -->
    //                     <div class="shop-discounts"><span>${e.youhui}</span></div>
    //                     <!-- 金额 -->
    //                     <div class="shop-havemoney">
    //                         <p class="shop-havemoneys">￥${e.price * 1 * e.num}</p>
    //                         <p>共省<span>￥20</span></p>
    //                     </div>
    //                     <div class="clearshop">
    //                         <a href="" class="iconfont icon-shoucang1"></a>
    //                         <a href="" class="iconfont icon-shanchu onedele"></a>
    //                     </div>
    //                 </div>
    //                 </li>`
    //                 }).join("")




    //                 // <!-- 有商品 时-->
    //                 let hascon = `<div class="car-haveshop">
    //             <div class="mycar">
    //                 <h4>我的购物车</h4>
    //                 <div class="mycar-status">
    //                     购物车状态：
    //                     <span></span>
    //                     <span></span>
    //                     <span>（线上:
    //                         <span></span>, 门店：
    //                         <span></span>）</span>
    //                 </div>
    //                 <div class="mycar-p1">查看购物车中所添加的商品；增加减少数量、并勾选确认想要购买的商品进入下一步操作。</div>
    //             </div>

    //             <div class="car-list">
    //                 <!-- 头部 全选 -->
    //                 <ul class="car-listhead">
    //                     <li>
    //                         <input type="checkbox" class="allshop">全选
    //                     </li>
    //                     <li>商品</li>
    //                     <li>数量</li>
    //                     <li>单价</li>
    //                     <li>优惠</li>
    //                     <li>金额</li>
    //                 </ul>

    //                 <!-- 购物车商品 -->
    //                 <ul class="car-listul">
    //                     <!-- 根据店铺生成 li -->
    //                 ${uu}
    //                 </ul>
    //             </div>

    //             <!-- 商品全选 -->
    //             <div class="shop-footer">
    //                 <!-- 全选  删除 -->
    //                 <div>
    //                     <label for="allshop"><input type="checkbox" class="allshop" id="allshop">全选</label>
    //                     <span class="dele">删除</span>
    //                 </div>
    //                 <!-- 中间 -->
    //                 <div class="allshop-list">
    //                     <div>选购商品的品种：<span>${res.length}</span>种</div>
    //                     <div>选购数量总计：<span>${allnum}</span>件</div>
    //                     <div>商品金额总计：<span class="allshop-price">￥0.00</span></div>
    //                 </div>
    //                 <!-- 结算 -->
    //                 <button>结算</button>
    //             </div>
    //         </div>`


    //                 car.html(hascon);

    //         }

    //         dd()

    //         // 全选
    //         $(".allshop").click(function () {

    //             $("input[type=checkbox]").prop("checked", $(this).is(":checked"))
    //             //    $("input[type=checkbox]").attr("checked")

    //         })
    //         // 店铺的勾选
    //         $(".shopcheck").click(function () {
    //             $(this).parent().siblings().children("input[type=checkbox]").prop("checked", $(this).is(":checked"))
    //         })
    //         // 单个删除
    //         $(".onedele").click(function (e) {
    //             e.preventDefault();
    //             console.log();
    //             let yyy = $(this).parent().parent().parent().data("item")

    //             $.ajax({
    //                 type: "post",
    //                 data: {
    //                     listid: yyy
    //                 },
    //                 url: "../php/delecar.php",
    //                 dataType: "json",
    //                 success(res) {

    //                 }
    //             })
    //         })
    //         // 全选的删除

    //         $(".dele").click(function () {

    //         })

    //         function dd(){
    //             allprice = 0
    //             $(".onecheck").each((ind, e) => {
    //                 if ($(e).prop("checked")) {
    //                     let pri = $(e).siblings(".shop-havemoney").find(".shop-havemoneys").text().slice(1)
    //                     console.log(allprice);

    //                     allprice += pri * 1
    //                     console.log(allprice);
    //                 }
    //             });
    //             $(".allshop-price").text(`￥${allprice}`)

    //           }
    //         //总价

    //         $("input[type=checkbox]").click(function () {
    //           dd();
    //         })
    //         //加
    //         $(".addnumber").click(function () {
    //             let yyy = $(this).parent().parent().parent().data("item")
    //             $.ajax({
    //                 type: "post",
    //                 data: {
    //                     listid: yyy

    //                 },
    //                 url: "../php/addnumcar.php",
    //                 dataType: "json",
    //                 success(res) {
    //                     carfn();
    //                 }
    //             })

    //             // carfn()
    //         })


    //         //减
    //         $(".removenumber").click(function () {
    //             let yyy = $(this).parent().parent().parent().data("item")
    //             $.ajax({
    //                 type: "post",
    //                 data: {
    //                     listid: yyy
    //                 },
    //                 url: "../php/removenumcar.php",
    //                 dataType: "json",
    //                 success(res) {

    //                 }
    //             })
    //         })
    //         // allshop-price







    //     }

    // })


    // 方法二？？
    let allres;
    let dd;
    let car;
    new Promise(function (resolve, reject) {
        car = $(".car0");
        $.ajax({
            type: "post",
            data: "",
            url: "../php/getcar.php",
            dataType: "json",
            success(res) {
                if (res.length == 0) {
                    let conten = `<div class="car-noshop">
                                        <div></div>
                                        <div>
                                            <p>您的购物车还没有商品</p>
                                            <p class="car-tobuy">
                                                <a href="./head.html">
                                                    <img src="../images/fh.gif" alt=""> 马上去购物
                                                </a>
                                                <a href="">
                                                    <img src="../images/xx.gif" alt=""> 查看自己的订单
                                                </a>
                                            </p>
                                        </div>
                                    </div> `
                    car.html(conten)


                } else {

                    let allnum = 0;



                    res.forEach(ele => {
                        allnum += (ele.num) * 1

                    });
                    let uu = res.map(e => {
                        return `<li  data-item=${e.listid}>

                                        <p class="car-list-merchant">
                                            <input type="checkbox" class="shopcheck">${e.shorw}
                                        </p>

                                        <!-- 根据店铺 相关商品生成div -->
                                        <div class="shops">
                                            <!-- 多选框 -->
                                            <input type="checkbox"  ${e.isActive == 1 ? "checked" : ""} class="onecheck">
                                            <!-- 商品 图片与名称 -->
                                            <div class="shop-con">
                                                <img src="${e.img}" alt="">
                                                <p>${e.tit}</p>
                                            </div>
                                            <!-- 数量 -->
                                            <div class="shop-number">
                                                <span class="removenumber">-</span>
                                                <span class="numbers">${e.num}</span>
                                                <span class="addnumber">+</span>
                                            </div>
                                            <!-- 价格 -->
                                            <div class="shop-price"><span class="shopprice-span">￥${e.price}</span></div>
                                            <!-- 优惠 -->
                                            <div class="shop-discounts"><span>${e.youhui}</span></div>
                                            <!-- 金额 -->
                                            <div class="shop-havemoney">
                                                <p class="shop-havemoneys">￥${e.price * 1 * e.num}</p>
                                                <p>共省<span>￥20</span></p>
                                            </div>
                                            <div class="clearshop">
                                                <a href="" class="iconfont icon-shoucang1"></a>
                                                <a href="" class="iconfont icon-shanchu onedele"></a>
                                            </div>
                                        </div>
                                        </li>`
                    }).join("")

                    // <!-- 有商品 时-->
                    let hascon = `<div class="car-haveshop">
                                    <div class="mycar">
                                        <h4>我的购物车</h4>
                                        <div class="mycar-status">
                                            购物车状态：
                                            <span></span>
                                            <span></span>
                                            <span>（线上:
                                                <span></span>, 门店：
                                                <span></span>）</span>
                                        </div>
                                        <div class="mycar-p1">查看购物车中所添加的商品；增加减少数量、并勾选确认想要购买的商品进入下一步操作。</div>
                                    </div>

                                    <div class="car-list">
                                        <!-- 头部 全选 -->
                                        <ul class="car-listhead">
                                            <li>
                                                <input type="checkbox" class="allshop">全选
                                            </li>
                                            <li>商品</li>
                                            <li>数量</li>
                                            <li>单价</li>
                                            <li>优惠</li>
                                            <li>金额</li>
                                        </ul>

                                        <!-- 购物车商品 -->
                                        <ul class="car-listul">
                                            <!-- 根据店铺生成 li -->
                                        ${uu}
                                        </ul>
                                    </div>

                                    <!-- 商品全选 -->
                                    <div class="shop-footer">
                                        <!-- 全选  删除 -->
                                        <div>
                                            <label for="allshop"><input type="checkbox" class="allshop" id="allshop">全选</label>
                                            <a href="" class="dele">删除</a>
                                        </div>
                                        <!-- 中间 -->
                                        <div class="allshop-list">
                                            <div>选购商品的品种：<span>${res.length}</span>种</div>
                                            <div>选购数量总计：<span>${allnum}</span>件</div>
                                            <div>商品金额总计：<span class="allshop-price">￥0.00</span></div>
                                        </div>
                                        <!-- 结算 -->
                                        <button>结算</button>
                                    </div>
                                </div>`
                    car.html(hascon);

                }
                dd();
                resolve();
            }

        })


        dd = function () {
            let allprice = 0
            $(".onecheck").each((ind, e) => {
                if ($(e).prop("checked")) {
                    let pri = $(e).siblings(".shop-havemoney").find(".shop-havemoneys").text().slice(1)
                    allprice += pri * 1
                }
            });
            $(".allshop-price").text(`￥${allprice}`)

        };

        $(".model-foot").load("./model/Mfoot.html .yg-footbottom", function () {
            $(".yg-footbottom").css("marginTop", "30px")
        })


    }).then(() => {
        function fn() {
            $.ajax({
                type: "post",
                data: "",
                url: "../php/getcar.php",
                dataType: "json",
                success(res) {
                    if (res.length == 0) {

                        let conten = `<div class="car-noshop">
                                            <div></div>
                                            <div>
                                                <p>您的购物车还没有商品</p>
                                                <p class="car-tobuy">
                                                    <a href="">
                                                        <img src="../images/fh.gif" alt=""> 马上去购物
                                                    </a>
                                                    <a href="">
                                                        <img src="../images/xx.gif" alt=""> 查看自己的订单
                                                    </a>
                                                </p>
                                            </div>
                                        </div> `
                        car.html(conten);

                    } else {

                        let allnum = 0;
                        res.forEach(ele => {
                            allnum += (ele.num) * 1
                        });
                        let uu = res.map(e => {
                            return `<li  data-item=${e.listid}>

                                            <p class="car-list-merchant">
                                                <input type="checkbox" class="shopcheck">${e.shorw}
                                            </p>

                                            <!-- 根据店铺 相关商品生成div -->
                                            <div class="shops">
                                                <!-- 多选框 -->
                                                <input type="checkbox"  ${e.isActive == 1 ? "checked" : ""} class="onecheck">
                                                <!-- 商品 图片与名称 -->
                                                <div class="shop-con">
                                                    <img src="${e.img}" alt="">
                                                    <p>${e.tit}</p>
                                                </div>
                                                <!-- 数量 -->
                                                <div class="shop-number">
                                                    <span class="removenumber">-</span>
                                                    <span class="numbers">${e.num}</span>
                                                    <span class="addnumber">+</span>
                                                </div>
                                                <!-- 价格 -->
                                                <div class="shop-price"><span class="shopprice-span">￥${e.price}</span></div>
                                                <!-- 优惠 -->
                                                <div class="shop-discounts"><span>${e.youhui}</span></div>
                                                <!-- 金额 -->
                                                <div class="shop-havemoney">
                                                    <p class="shop-havemoneys">￥${e.price * 1 * e.num}</p>
                                                    <p>共省<span>￥20</span></p>
                                                </div>
                                                <div class="clearshop">
                                                    <a href="" class="iconfont icon-shoucang1"></a>
                                                    <a href="" class="iconfont icon-shanchu onedele"></a>
                                                </div>
                                            </div>
                                            </li>`
                        }).join("");

                        // <!-- 有商品 时-->
                        let hascon = `<div class="car-haveshop">
                                        <div class="mycar">
                                            <h4>我的购物车</h4>
                                            <div class="mycar-status">
                                                购物车状态：
                                                <span></span>
                                                <span></span>
                                                <span>（线上:
                                                    <span></span>, 门店：
                                                    <span></span>）</span>
                                            </div>
                                            <div class="mycar-p1">查看购物车中所添加的商品；增加减少数量、并勾选确认想要购买的商品进入下一步操作。</div>
                                        </div>

                                        <div class="car-list">
                                            <!-- 头部 全选 -->
                                            <ul class="car-listhead">
                                                <li>
                                                    <input type="checkbox" class="allshop">全选
                                                </li>
                                                <li>商品</li>
                                                <li>数量</li>
                                                <li>单价</li>
                                                <li>优惠</li>
                                                <li>金额</li>
                                            </ul>

                                            <!-- 购物车商品 -->
                                            <ul class="car-listul">
                                                <!-- 根据店铺生成 li -->
                                            ${uu}
                                            </ul>
                                        </div>

                                        <!-- 商品全选 -->
                                        <div class="shop-footer">
                                            <!-- 全选  删除 -->
                                            <div>
                                                <label for="allshop"><input type="checkbox" class="allshop" id="allshop">全选</label>
                                                <span class="dele">删除</span>
                                            </div>
                                            <!-- 中间 -->
                                            <div class="allshop-list">
                                                <div>选购商品的品种：<span>${res.length}</span>种</div>
                                                <div>选购数量总计：<span>${allnum}</span>件</div>
                                                <div>商品金额总计：<span class="allshop-price">￥0.00</span></div>
                                            </div>
                                            <!-- 结算 -->
                                            <button>结算</button>
                                        </div>
                                    </div>`
                        car.html(hascon);
                    }
                    dd();
                }
            })
        }


        $(".allshop").click(function () {
            $("input[type=checkbox]").prop("checked", $(this).is(":checked"))
        })
        // 店铺的勾选
        $(".shopcheck").click(function () {
            $(this).parent().siblings().children("input[type=checkbox]").prop("checked", $(this).is(":checked"))
        })
        // 删除
        car.on("click", ".onedele", function (e) {
            e.preventDefault();
            let yyy = $(this).parent().parent().parent().data("item")
            $.ajax({
                type: "post",
                data: {
                    listid: yyy
                },
                url: "../php/delecar.php",
                success(res) {
                    fn();


                }
            })
        })

        //总价
        let allprice;
        $("input[type=checkbox]").click(function () {
            dd();
        })

        //加
        car.on("click", ".addnumber", function () {
            let yyy = $(this).parent().parent().parent().data("item")
            $.ajax({
                type: "post",
                data: {
                    listid: yyy
                },
                url: "../php/addnumcar.php",
                // dataType: "json",
                success(res) {
                    fn()
                }
            })
        })

        //减
        car.on("click", ".removenumber", function () {
            let yyy = $(this).parent().parent().parent().data("item")

            $.ajax({
                type: "post",
                data: {
                    listid: yyy
                },
                url: "../php/removenumcar.php",
                // dataType: "json",
                success(res) {
                    fn();
                }
            })
        })

        // 多项删除
        car.on("click", ".dele", function (e) {
            e.preventDefault();
            // console.log(this); 
            let arr = [];
            $(".onecheck").each((ind, ex) => {

                if ($(ex).prop("checked")) {
                    let yyy = $(ex).parent().parent().data("item");
                    arr.push(yyy)
                }

            });

            $.ajax({
                type: "post",
                data: {
                    listid: JSON.stringify(arr)
                },
                url: "../php/moredele.php",
                success(res) {
                    fn();

                }
            })
        })

    })








})