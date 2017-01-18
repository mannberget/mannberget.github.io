$(document).ready(function(){

  if(window.pageYOffset > 240) {
      $('.headeralt').slideDown(150);
  }
  else{
    $('.headeralt').slideUp(150);
  }

  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 240;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('.headeralt').slideDown(250);
    }

    if(y_scroll_pos < scroll_pos_test){
      $('.headeralt').slideUp(250);
    }
  });
  $(window).on('touchmove', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 240;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('.headeralt').slideDown(250);
    }

    if(y_scroll_pos < scroll_pos_test){
      $('.headeralt').slideUp(250);
    }
  });

});
