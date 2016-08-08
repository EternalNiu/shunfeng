/**
 * Created by Administrator on 2016/8/1.
 */



window.onload = function(){
    //快递位置的选取
    $('.fl').mouseover(function() {
        $(this).addClass('hover');
        $(".inner b").addClass('transform');
        $('.location').css('display','block')
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".inner b").removeClass('transform');
        $('.location').css('display','none')
    });
    $('.wrong').click(function(){
        $(".location").css('display','none')
    });
//点击更换地址
    $('.morecity p span a').each(function(){
        $(this).click(function(){
            $('.inner span').text($(this).text());
        })
    });
   //我的优选的js效果
    $('.besttop').mouseover(function() {
        $(this).addClass('hover');
        $('.chart').css('display','block');
        $(".second").addClass('transform');
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".chart").css('display','none');
        $(".second").removeClass('transform');
    });
    //移动客户端的效果
    $('.phonetop').mouseover(function() {
        $(this).addClass('hover');
        $('.movephone').css('display','block');
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".movephone").css('display','none');
    });
    //帮助中心的效果
    $('.charttop').mouseover(function() {
        $(this).addClass('hover');
        $('.chartone').css('display','block');
        $(".last").addClass('transform');
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".chartone").css('display','none');
        $(".last").removeClass('transform');
    });
   //网站导航得效果
    $('.navigation').mouseover(function() {
        $(this).addClass('hover');
        $('.navigation_none').css('display','block');
        $(".navig").addClass('transform');
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".navigation_none").css('display','none');
        $(".navig").removeClass('transform');
    });
    $('.phoneleft').hover(function(){
        $('.phone').css('background','url(../images/header.png) no-repeat -73px -138px')
    });
    //微信头像的效果展示
    $('.weixinone').mouseover(function() {
        $(this).addClass('hover');
        $('.ddt').css('display','block');
    }).mouseout(function () {
        $(this).removeClass('hover');
        $(".ddt").css('display','none');
    });

    //购物车的效果
    $('.shopingcar').hover(function(){
        $(".cart-righ").css('display','block')
    },function(){
        $(".cart-righ").css('display','none')
    });

//这个是商品列表的详细展示
    var Oli = $('.allthing');
    var Ali = $('.tab ul li ');
    var h3 = $('.i_master h3 a');
    var pa = $('.i_master p a');
    $(Oli).each(function(){
        $(this).hover(function(){
            var $this = $(this);
            var $t = $this.index();
            $(Oli).removeClass();
            $this.addClass('current');
            $(Ali).css('display','none');
            $(h3).css('color','#6C9C0A');
            $(pa).css('color','#6C9C0A');
            $(Ali).eq($t).css('display','block');
        });
        $(this).mouseleave(function () {
            var $this = $(this);
            var $t = $this.index();
            $(Oli).removeClass();
            $this.removeClass('currentt');
            $(h3).css('color','#fff');
            $(pa).css('color','#fff');
            $(Ali).eq($t).css('display','none');
        })
    });
    //背景颜色的改变
     var OBack = $('.slide_show ul li');
    $(OBack).each(function(){
        setInterval(function(){
            $(this).show();
        },2000);
    });

    //新版商品列表的展示代码
    $('.ddt2').hover(function(){
        $('.lie').css('display','block');
    },function(){
        $('.lie').css('display','none');
        $('.lie1').css('display','block');
    });

    $('.lieone1').hover(function(){
        $(this).addClass('bai');
        $('.danlu').addClass('dan');
        $('.pwhite').css('color','#76ac25');
        $('.wowo1').addClass('xian');
        $('.fresh1').addClass('xiao');
    },function(){
        $(this).removeClass('bai');
        $('.danlu').removeClass('dan');
        $('.pwhite ').css('color','#ddeac8');
        $('.wowo1').removeClass('xian');
    });
    $('.lieone2').hover(function(){
        $(this).addClass('bai');
        $('.danlu1').addClass('dan');
        $('.pwhite1').css('color','#76ac25');
        $('.wowo2').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu1').removeClass('dan');
        $('.pwhite1 ').css('color','#ddeac8');
        $('.wowo2').removeClass('xian');
    });
    $('.lieone3').hover(function(){
        $(this).addClass('bai');
        $('.danlu2').addClass('dan');
        $('.pwhite2').css('color','#76ac25');
        $('.wowo3').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu2').removeClass('dan');
        $('.pwhite2 ').css('color','#ddeac8');
        $('.wowo3').removeClass('xian');
    });
    $('.lieone4').hover(function(){
        $(this).addClass('bai');
        $('.danlu3').addClass('dan');
        $('.pwhite3').css('color','#76ac25');
        $('.wowo4').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu3').removeClass('dan');
        $('.pwhite3 ').css('color','#ddeac8');
        $('.wowo4').removeClass('xian');
    });
    $('.lieone5').hover(function(){
        $(this).addClass('bai');
        $('.danlu4').addClass('dan');
        $('.pwhite4').css('color','#76ac25');
        $('.wowo5').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu4').removeClass('dan');
        $('.pwhite4 ').css('color','#ddeac8');
        $('.wowo5').removeClass('xian');
    });
    $('.lieone6').hover(function(){
        $(this).addClass('bai');
        $('.danlu5').addClass('dan');
        $('.pwhite5').css('color','#76ac25');
        $('.wowo6').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu5').removeClass('dan');
        $('.pwhite5 ').css('color','#ddeac8');
        $('.wowo6').removeClass('xian');
    });
    $('.lieone7').hover(function(){
        $(this).addClass('bai');
        $('.danlu6').addClass('dan');
        $('.pwhite6').css('color','#76ac25');
        $('.wowo7').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu6').removeClass('dan');
        $('.pwhite6 ').css('color','#ddeac8');
        $('.wowo7').removeClass('xian');
    });
    $('.lieone8').hover(function(){
        $(this).addClass('bai');
        $('.danlu7').addClass('dan');
        $('.pwhite7').css('color','#76ac25');
        $('.wowo8').addClass('xian');
    },function(){
        $(this).removeClass('bai');
        $('.danlu7').removeClass('dan');
        $('.pwhite7 ').css('color','#ddeac8');
        $('.wowo8').removeClass('xian');
    });


    //这个是鼠标在图片上面的时候显示加入购物车的图标
    $(".price_list0").each(function(index, element) {
        $(this).hover(function(){
            $(this).find(".maint").addClass("showone");
            $(this).find(".textbuttom").show().animate({"bottom":"0px"},300);
        },function(){
            $(this).find(".maint").removeClass("showone");
            $(this).find(".textbuttom").css("bottom","-24px").hide();
        });
    });
    $(".price_list1").each(function(index, element) {
        $(this).hover(function () {
            $(this).find(".mai").addClass("showone");
            $(this).find(".textbutto").show().animate({"bottom": "0px"}, 300);
        }, function () {
            $(this).find(".mai").removeClass("showone");
            $(this).find(".textbutto").css("bottom", "-24px").hide();
        })
    });
    $(".pImg").each(function(index, element) {
        $(this).hover(function () {
            $(this).find(".mint").addClass("showone");
            $(this).find(".textb").show().animate({"bottom": "0px"}, 300);
        }, function () {
            $(this).find(".mint").removeClass("showone");
            $(this).find(".textb").css("bottom", "-24px").hide();
        })
    });

    //两个图片的效果展示
    $('.cur1').click(function(){
        $('.oneli').css('display','block');
        $('.oneli1').css('display','none');
        $('.cur2').css('background','#eee');
        $('.cur1').css('background','#6C9C0A')
    });
    $('.cur2').click(function(){
        $('.oneli1').css('display','block');
        $('.oneli').css('display','none');
        $('.cur1').css('background','#eee');
        $('.cur2').css('background','#6C9C0A')
    });
    $('.slide').hover(function(){
        $('.btn-midd').css('display','block')
    },function(){
        $('.btn-midd').css('display','none')
    });
    $('.btn_next').click(function(){
        $('.oneli').css('display','none');
        $('.oneli1').css('display','block');
        $('.cur1').css('background','#eee');
        $('.cur2').css('background','#6C9C0A')

    });
    $('.btn_prev').click(function(){
        $('.oneli1').css('display','none');
        $('.oneli').css('display','block');
        $('.cur2').css('background','#eee');
        $('.cur1').css('background','#6C9C0A')
    });

        //这个是最下面的一个小的罩层
        $('.mya1').mouseover(function(){
            $('.ushadow1').css('display','block');
        });
        $('.mya1').mouseout(function(){
            $('.ushadow1').css('display','none');
        });
        $('.mya2').mouseover(function(){
        $('.ushadow2').css('display','block');
    });
        $('.mya2').mouseout(function(){
        $('.ushadow2').css('display','none');
    });
        $('.mya3').mouseover(function(){
            $('.ushadow3').css('display','block');
        });
        $('.mya3').mouseout(function(){
            $('.ushadow3').css('display','none');
        });
        $('.mya4').mouseover(function(){
            $('.ushadow4').css('display','block');
        });
        $('.mya4').mouseout(function(){
            $('.ushadow4').css('display','none');
        })

    //展示固定窗口的标签
    $('#side_cart').hover(function(){
        $(".s-cart").addClass('s-cart1');
        $(this).find(".cart-right").show().animate({"right":"50"},300)
    },function(){
        $(".s-cart").removeClass('s-cart1');
        $(this).find(".cart-right").hide().animate({"right":"-370px"},300);
    });
    $('#side_gunag').hover(function(){
        $(".s-guang").addClass('s-guang1');
        $(this).find(".guang-right").show().animate({"right":"50"},300)
    },function(){
        $(".s-guang").removeClass('s-guang1');
        $(this).find(".guang-right").hide().animate({"right":"-370px"},300);
    });
    $('#side_app').hover(function(){
        $(".s-app").addClass('s-guang1');
        $(this).find(".moveph").show().animate({"right":"50"},300)
    },function(){
        $(".s-app").removeClass('s-guang1');
        $(this).find(".moveph").hide().animate({"right":"-370px"},300);
    });

    //邮箱后面地址的选取
    $(".textone").hover(function(){
        $(".local").css('display','block');
    },function(){
        $(".local").css('display','none');
    });
    $('.wrong').click(function(){
        $(".local").css('display','none')
    });

//页面固定的滚动效果

    var a = 1;//获取div距离浏览器顶部高度
//绑定浏览器滚动事件
    $(window).scroll(function() {
        var obj_height = document.documentElement.scrollTop || document.body.scrollTop;
        //当往下拉的高度超出div的高度时浮动跟随显示在浏览器最顶部
        if(obj_height >= a)
        {
            $(".s-top").css('display','block')
        }
        else
        {
            $(".s-top").hide().animate({"scrolltop":"0"},600);
            //当浏览器高度小于div原高度时去除浮动跟随,定位回到原位置
        }
    });
};