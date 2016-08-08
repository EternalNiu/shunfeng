/**
 * Created by Administrator on 2016/7/29.
 */

$(document).ready(function(){
    function close(){
        $('#bannerTop span').click(function(){
            $('#bannerTop').css('display','none');
        })
    }
    close();
//city提示框
    function currentCityName(){
        $('#currentCityName').hover(function(){
            $('.pshort').addClass('outline');
            $('.dd').css('display','block');
            $('.pshort b').addClass('translate')
        },function(){
            $('.pshort').removeClass('outline');
            $('.dd').css('display','none');
            $('.pshort b').removeClass('translate')
        });
    }
    currentCityName();
    /*点击消失*/
    function cityOff(){
        $('.city_top .off').click(function(){
            $('.dd').css('display','none');
        })
    }
    cityOff();
    /*城市的遍历*/
    function tab(){
        $('.huadong li').each(function(index){
            $(this).click(function(){
                $('.htcity dl').each(function(){
                    $('.htcity dl').eq(index).hide();
                })
                $('.htcity dl').eq(index).show();
            })
        })
    }
    tab();
    /*下拉菜单*/
    function menu(){
        $('.re').each(function(index){
            $(this).mouseover(function(){
                $('.blank2').css('display','none').eq(index).css('display','block');
                $('.outline2').css('display','none').eq(index).css('display','block');
                $('.re .select').css('display','none').eq(index).css('display','block');
                $('.menus b').removeClass('rotate').eq(index).addClass('rotate');

            });
            $(this).mouseout(function(){
                $('.blank2').css('display','none');
                $('.outline2').css('display','none');
                $('.re .select').css('display','none');
                $('.menus b').removeClass('rotate');
            })
        })
    }
    menu();
    /*icon遍历*/
    function icon(){
        $('.tt').each(function(index){
            $(this).hover(function(){
                $('.ic').css('display','none').eq(index).css('display','block');
                $('#gg').css('display','block');
            });
            $('.tt').mouseleave(function() {
                $('.ic').css('display', 'none');
                $('.re .select').css('display','none');
                $('#gg').css('display','none');
            })
        })
    }
    icon();
    /*下拉导航*/
    function navAll(){
        $('.allNav').hover(function(){
            $('.allNav_bottom').css('display','block');
            $('.allNav .blank3').css('display','block');
            $('.allNav p').addClass('rotate');
        },function(){
            $('.allNav_bottom').css('display','');
            $('.allNav .blank3').css('display','');
            $('.allNav p').removeClass('rotate');
        });
    }
    navAll();
    /*轮播图*/
    function proto(){
        var timer;
        var b = 0;
        var dd;
        //console.log($('img'));
        function show(a){
            var index = a
            $('.list ul li').each(function(index){
                this.className= '';
                $('.slider ul li').eq(index).css('opacity','0');
            })
            $(' .list ul li').eq(index).addClass('control');
            //$('.main ul li').eq(index).addClass('current');
            $('.slider ul li').eq(index).animate({opacity:1},500);
        }
        $(' .list ul li').each(function(index){
            $(this).mouseover(function(){
                clearInterval(timer);
                show(index);
            })
            $(this).mouseout(function(){
                b = index;
                autoPLay();
            })
        })
        function autoPLay(){
            clearInterval(dd);
            timer = setInterval(function(){
                b++;
                if(b == $('.list ul li').length){
                    b = 0;
                }
                show(b);
            },2000)
        }
        autoPLay();

    }
    proto();
    /*精选商品下拉框*/
    function siftSelect(){
        $('.productNav').hover(function(){
            $('.allSort').css('display','block')
        },function(){
            $('.allSort').css('display','')
        })
    }
    siftSelect();
    /*精选商品侧导航 鼠标移入移除*/
    function itemNav(){
        $('.item').each(function(index){
            $(this).mouseover(function(){
                $('.meatRightNav').css('display','none').eq(index).css('display','block');
                $('.i-master').removeClass('meatRightNavBg').eq(index).addClass('meatRightNavBg');
                $('#bookSort .item .dev a').eq(index).css('color','#76ac25');

            });
            $(this).mouseleave(function(){
                $('.meatRightNav').css('display','none');
                $('.i-master').removeClass('meatRightNavBg');
                $('#bookSort .item .dev a').css('color','white');

            })
        })
    }
    itemNav();
    /*窗口定位效果*/
    function fiexdShow(){
        $('.side-c').each(function(index){
            $(this).mouseover(function(){
                $('.side1').eq(index).css('display','block');
                $('.box-bg').eq(index).css('display','block');

            })
            $(this).mouseout(function(){
                $('.side1').css('display','none');
                $('.box-bg').css('display','none');
            })
        })
    }
    fiexdShow();
    /*点击返回顶部*/
    function topScroll(){
        $('.car4').click(function(){
            $('html,body').animate({scrollTop:'0px'},500)
        });
        var bToTop = function() {
            var st = $(document).scrollTop();
            (st > 0) ? $(".s-top").css("display", "block") : $(".s-top").css("display", "none");
        };
        $(window).bind("scroll", bToTop);
        bToTop();
    }
    topScroll();
    //if(document.body.clientHeight > innerHeight){
    //    $('#bToTop').css('display','none');
    //}else {
    //    $('#bToTop').css('display','block');
    //}

    /*动画效果，当点击的时候更换图片 鲜一下 */
    function animates(){
        $('.arm_top').click(function(){
            clearInterval(machine_time);
            $('.arm_article').addClass('arm_articleBg');
            $(".arm_top").animate({"top":"40"},250,function(){$(".arm_top").animate({"top":"0"},250,function(){$('.arm_article').removeClass('arm_articleBg')})});

        });
        /*鲜一下动画*/
        function arm_machine(){
            machine_time = setInterval(function(){
                $(".arm-text").stop().animate({"top":"37"},300,function(){
                    $(".arm-text").animate({"top":"25"},300,function(){$(".arm-text").animate({"top":"37"},300,function(){$(".arm-text").animate({"top":"25"},300)})})});

            },5000);
        }
        arm_machine();
        $(".arm_top").hover(function(){
            clearInterval(machine_time);
            $(".arm_top").animate({"top":"5"},250);
        },function(){
            $(".arm_top").animate({"top":"0"},250);
            arm_machine();
        });

    }
    animates();
    /*鼠标放上去显示购物车*/
    function priceTop(){
        $('.p-img').each(function(index){
            $(this).mouseover(function(){
                $(' .p-price').removeClass('Y-priceTop').eq(index).addClass('Y-priceTop');
                $('.p-addcart').removeClass('Y-priceAdd').eq(index).addClass('Y-priceAdd');

            });
            $(this).mouseleave(function(){
                $('.p-price').removeClass('Y-priceTop');
                $('.p-addcart').removeClass('Y-priceAdd')
            })
        })
    }
    priceTop();
    /*图片翻滚效果*/
    function overtrun(){
       var $box = $('')



    }
    function he_more(){
        $(".floor-hd-more").click(function(){
            var This = $(this);
            var f_1 = $('.f-1');
            var f_2 = $('.f-2');
            This.find(f_1).animate({"top":"40"},600,function(){This.find(f_2).animate({"top":"0"});});

        });
    }
    he_more();
    /*商品列表显示购物车*/
    function productList(){
        $('.price_list1').each(function(index){
            $(this).mouseover(function(){
                $('.p-item1').removeClass('price-list1').eq(index).addClass('price-list1');
                $('.product-list .p-btn').css('display','none').eq(index).css('display','block');
            });
            $(this).mouseleave(function(){
                $('.p-item1').removeClass('price-list1');
                $('.product-list .p-btn').css('display','none');
            })
        })
    }
    productList();
    function share(){
        $('.share img').hover(function(){
           $('.share').addClass('showShare');
        });
        $('.share').mouseleave(function(){
            $('.share').removeClass('showShare');
        })
    }
    share();



});
