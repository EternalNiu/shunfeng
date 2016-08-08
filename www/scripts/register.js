/**
 * Created by Administrator on 2016/8/5.
 */

$('form').submit(function(e){
    e.preventDefault();
    var data = $(this).serialize();
    if($('input[name=password]').val() === $('input[name=rpassword]').val()){
        $.post('/register',data,function(data){
            $('.modal-body').text(data.message);
            $('#myModal').modal('show').on('hidden.bs.modal',function(){
                if(data.code == 'success'){
                    location.href = '/index.html';
                }
            })
        })
    }else{
        $('.modal-body').text('您的密码不一致');
        $('.modal').modal('show');
    }
});

