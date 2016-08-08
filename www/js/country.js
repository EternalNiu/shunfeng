/**
 * Created by Administrator on 2016/8/2.
 */

window.onload = function(){
    //我的优选和帮助中心的隐藏
    var menus = document.querySelectorAll(".menus");
    var tou = document.querySelectorAll(".menus a b img");
    var zi = document.querySelectorAll(".menus>a");
    var dd = document.getElementsByClassName("dd");
    for(var i=0;i< menus.length;i++){
        menus[i].index = i;
        menus[i].onmousemove = function(){
            dd[this.index].style.display = 'block';
            menus[this.index].style.backgroundColor = '#fff';
            zi[this.index].style.color = 'rgb(102,153,0)';
            menus[this.index].style.boxShadow = '2px 2px 10px #ccc';
            tou[this.index].style.transform = 'rotate(180deg)';
            tou[this.index].style.transition = 'transform 0.2s';

        };
        menus[i].onmouseout = function(){
            dd[this.index].style.display = 'none';
            menus[this.index].style.backgroundColor = 'rgb(247,247,247)';
            zi[this.index].style.color = '';
            menus[this.index].style.boxShadow = 'none';
            tou[this.index].style.transform = 'none';
        };

    }


    //购物车的隐藏
    var shop = document.getElementsByClassName("shopingcar")[0];
    var floatcar1 = document.getElementsByClassName("floatcar1")[0];
    shop.addEventListener('mouseover',function(){
        floatcar1.style.display = 'block';
    });
    shop.addEventListener('mouseout',function(){
        floatcar1.style.display = 'none';
    });


    //移动客户端的隐藏
    $(function(){
        $('.d2').hover(function(){
            $('.ddk').css('display','block');
            $('.corner').css('display','block');
            $('.phone').addClass('moveGo');
        },function(){
            $('.ddk').css('display','none');
            $('.corner').css('display','none');
            $('.phone').removeClass('');
        });


        //    网站导航的隐藏
        $('.allCat').mouseover(function(){
            $('.allCat .dd').css('display','block');
        });
        $('.allCat').mouseout(function(){
            $('.allCat .dd').css('display','none');
        });


        //微信二维码
        $('.d4').mouseover(function(){
            $('.d4 .dd').css('display','block');
            $('.d4 .corner1').css('display','block');
        });
        $('.d4').mouseleave(function(){
            $('.d4 .dd').css('display','none');
            $('.d4 .corner1').css('display','none');
        });


        //优选国际列表的隐藏
        $('.item').each(function(index){
           $(this).hover(function(){
               $('.item').eq(index).css({'background-color':'#fff','color':'rgb(48,183,143)'});
               $('.listItemName').css('color','rgb(48,183,143)');
               $('.ydh-listbox').eq(index).css('display','block');
           },function(){
               $('.item').eq(index).css({'background-color':'','color':''});
               $('.listItemName').css('color','');
               $('.ydh-listbox').eq(index).css('display','none');
           })
        });


        //轮播图
        $(function(){
            var timer;
            var b = 0;
            var dd;
            function show(a){
                var index = a;
                $('.list ul li').each(function(index){
                    this.className = '';
                    $('.main ul li').eq(index).css('opacity','0');
                });
                $('.list ul li').eq(index).addClass('control');
                $('.main ul li').eq(index).animate({opacity:1},800);
            }
            $('.list ul li').each(function(index){
                $(this).mouseover(function(){
                    clearInterval(timer);
                    show(index);
                });
                $(this).mouseout(function(){
                    b = index;
                    autoPlay();
                })
            });
            function autoPlay(){
               timer = setInterval(function(){
                   b++;
                   if(b == $('.list ul li').length){
                       b = 0;
                   }
                   show(b);
               },3000);
            }
            autoPlay();
        });

        //轮播图上右边的图片特效
        $('.rSide a img').each(function(index){
            $(this).hover(function(){
                $('.rSide a img').css('opacity','.9');
                $(this).css('opacity','1');
            },function(){
                $('.rSide a img').css('opacity','1');
            })
        });

        //加入购物车特效
        $('.g3_shop li').each(function(index){
            //clearInterval(animate);
            $(this).hover(function(){
                $('.gBtn').eq(index).animate({'top':'136px','opacity':'1'},400);
            },function(){
                $('.gBtn').eq(index).animate({'top':'161px','opacity':'0'},400);
            })
        });





    });
};
//$(document).ready(function(){
//
//})