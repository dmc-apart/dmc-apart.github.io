$('.nav').load('nav.html');
$('.main_visual').load('slide_visual.html');

$('.sub_menu_02 a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;
  $('.sub_menu_02 a.current').removeClass('current');
  $(this).addClass('current');
  // $('.sub_menu_02').load(url + ' .sub_menu_02');
  $('.container').load(url + ' .container').hide().fadeIn('slow');

});

// $('.sub_menu_01 li a').on('click', function(e) {
//   e.preventDefault();
//   var url = this.href;
//   console.log('on');
//   $('.container').load(url + ' .container').hide().fadeIn('slow');
//
// });
