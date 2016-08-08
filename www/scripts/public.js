/**
 * Created by Administrator on 2016/8/5.
 */

var petname = $.cookie('petname');

if(petname){
    $('.out').css('display','none');
    $('.in').find('.dropdown-togg').html(petname + '<span class= "caret"></span>');
    $('.in').css('display','block');
    $('.mianfei').html('退出');
}else {
    $('.in').css('display','none');
    $('.out').css('display','block');
}

$('.mianfei').click(function(){
    $.get('/signout',null,function(data){
        if(data.code == 'success'){
            location.href = 'index.html';
        }
    })
});