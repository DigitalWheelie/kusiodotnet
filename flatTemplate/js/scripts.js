jQuery(document).ready( function($) {

var $container = $('.portfolio-items');

$container.isotope();

// filter items when filter link is clicked
$('.portfolio-nav li a').click(function(){
  var selector = $(this).attr('data-filter');
  $(this).parent().siblings().find('a').removeClass('selected');
  $(this).addClass("selected");

  $container.isotope({ 
    filter: selector,
    animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false
   }
  });

  return false;
});

var navLabel = new Array('Intro', 'Skills', "Portfolio", 'Contact');

$("#page").pageScroller({
  html5: true,
  navigation: navLabel,
  sectionClass: 'scroll',
  scrollOffset: -15
});

$(".pageScroll").wrap("<div class='wrap' />");
});
