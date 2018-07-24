//slick settings
$(document).ready(function(){
  $('.card-cont').slick({
    arrows: true,
    centerPadding: '0px',
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

//dynamic nav
var waypoints = $('.main').waypoint(function(direction) {
  if(direction === 'down') {
    $('.down').css('opacity', '0.9');
  }
  else if( direction === 'up') {
    $('.down').css('opacity', '0');
  }
})

//anchor
$(document).ready(function(){
  $("body").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-70}, 1000);
  });
});