/**
 * Created by Administrator on 2016/8/5.
 */
/*登录界面的tab切换*/
$(function(){
  $('#login_nav li').each(function(index){
      $(this).click(function(){
          $('#login_nav li').each(function(){
              $('#login_nav li').removeClass('current');
          })
          $(this).addClass('current');
          $('.login_content form').each(function(index){
              $('.login_content form').eq(index).hide();
          });
          $('.login_content form').eq(index).show();
      })
  })

});
