/**
 * Created by Administrator on 2016/8/5.
 */

//登录提交
$('form').submit(function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.post('/login',data,function(data){
        if(data.code == 'success'){
            location.href = '/index.html';
        }else{
            $('.modal-body').text(data.message);
            $('.modal').modal('show');
        }
    })
});
