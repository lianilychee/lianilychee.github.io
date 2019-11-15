/**** --- DOCUMENT READY --- ****/
$(document).ready(function() {

  var winH = $(window).height();
  var winW = $(window).width();
  var wrapperH = $('.index-wrapper').height();
  var wrapperW = $('.index-wrapper').width();

  var halfH = (winH-wrapperH)/2;
  var halfW = (winW-wrapperW)/2;

  $('.index-wrapper').css('margin-top',halfH);

  if (winW > 800) {
    $('.index-wrapper').css('margin-left',halfW);
  }

  console.log('winW '+winW);
  console.log('winH '+winH);
  console.log('wrapperW '+wrapperW);  
  console.log('wrapperH '+wrapperH);
  console.log('halfH '+halfH);
  console.log('halfW '+halfW);
  
});


$(window).resize(function() {
  var winH = $(window).height();
  var winW = $(window).width();

  var wrapperH = $('.index-wrapper').height();
  var wrapperW = $('.index-wrapper').width();

  var halfH = (winH-wrapperH)/2;
  var halfW = (winW-wrapperW)/2;

  $('.index-wrapper').css('margin-top',halfH);

  if (winW > 800) {
    $('.index-wrapper').css('margin-left',halfW);
  };
});