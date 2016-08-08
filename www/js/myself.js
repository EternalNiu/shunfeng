/**
 * Created by Administrator on 2016/7/29.
 */


//轮播图特效
$(function(){
    var timer;
    var b = 0;
    var dd;
    function show(a){
        var index = a;
        $('.listone ul li').each(function(index){
            this.className= '';
            $('.mainniu ul li').eq(index).css('opacity','0');
        });
        $('.listone ul li').eq(index).addClass('control');
        $('.mainniu ul li').eq(index).animate({opacity:1},500);
    }
    $('.listone ul li').each(function(index){
        $(this).mouseover(function(){
            clearInterval(timer);
            show(index);
        });
        $(this).mouseout(function(){
            b = index;
            autoPLay();
        })
    });
    $('.mainniu ul li img').each(function(index){
        $(this).mouseover(function(){
            clearInterval(timer);
            show(index);
        });
        $(this).mouseout(function(){
            b = index;
            autoPLay();
        })
    });
    function autoPLay(){
        clearInterval(dd);
        timer = setInterval(function(){
            b++;
            if(b == $('.listone ul li').length){
                b = 0;
            }
            show(b);
        },2000)
    }
    autoPLay();
})
$(function(){

});
$(document).ready(function(){
    $("#scrollDiv").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
});

