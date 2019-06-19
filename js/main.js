/**** --- DOCUMENT READY --- ****/
$(document).ready(function() {

  var winH = $(window).height();
  var winW = $(window).width();
  var wrapperH = $('.index-wrapper').height();
     // TO-DO: height is not right by like, 40px
  var wrapperW = $('.index-wrapper').width();

  var halfH = (winH-wrapperH)/2;
  var halfW = (winW-wrapperW)/2;

  $('.index-wrapper').css('margin-left',halfW);
  $('.index-wrapper').css('margin-top',halfH);

  console.log('wrapperH '+wrapperH);
  
});


$(window).resize(function() {
  var winH = $(window).height();
  var winW = $(window).width();

  var wrapperH = $('.index-wrapper').height();
     // TO-DO: height is not right by like, 40px
  var wrapperW = $('.index-wrapper').width();

  var halfH = (winH-wrapperH)/2;
  var halfW = (winW-wrapperW)/2;

  $('.index-wrapper').css('margin-left',halfW);
  $('.index-wrapper').css('margin-top',halfH);
});