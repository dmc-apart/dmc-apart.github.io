// nav event
$('nav').each(function() {
  var $this   = $(this);
  $this.hover(function(e) {
    e.preventDefault();
    $('.nav_bar').toggleClass('nav_bar_active');
    $('li div').toggleClass('menu_active');
  });
  $('.nav_bar').hover(function() {
    $('.nav_bar').toggleClass('nav_bar_active');
    $('li div').toggleClass('menu_active');
  });
});


// $(  "nav", ".nav_bar" ).hover(function() {
//
//   if ( $( ".nav_bar:first" ).is( ":hidden" ) ) {
//     $( ".nav_bar" ).slideDown( "slow" );
//     $( "li div" ).delay(500).slideDown(300);
//
//   } else {
//     $( ".nav_bar" ).slideUp("slow");
//     $( "li div" ).slideUp(300);
//
//   }
// });
//
// $(  ".nav_bar" ).hover(function() {
//   console.log('호버');
//   if ( $( ".nav_bar:first" ).is( ":hidden" ) ) {
//     $( ".nav_bar" ).slideDown( "slow" );
//     $( "li div" ).delay(500).slideDown(300);
//
//   } else {
//     $( ".nav_bar" ).slideUp("slow");
//     $( "li div" ).slideUp(300);
//
//   }
// });



//quick event
$('.quick_btn').on('click', function(e) {
  e.preventDefault();
  // $('.quick_btn').slideToggle(1000);
  $('.quick_btn').delay(800).toggleClass('quick_btn_active');
  $('.quick li').slideToggle(800);
  console.log('on');
});
