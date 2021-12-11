$(function(){
  $('.yes').click(function(){
    $('.btn').removeClass('on');
    $(this).addClass('on');
  });
  $('.no').click(function(){
    $('.btn').removeClass('on');
    $(this).addClass('on');
  });

  $('#show-btn').click(function(){
    $('.click-show').show();
  });
});