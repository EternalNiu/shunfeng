/**
 * Created by Administrator on 2016/8/5.
 */

var petname = $.cookie('petname');
//回答
$('.questions').delegate('[question]','click',function(){
    if(petname){
        $.cookie('question',$(this).attr('question'));
        location.href = '/register.html';
    }else{
        location.href = '/login.html';
    }
});