$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });


var scroll = 0;

$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - scroll > 50){
    var navbarHeight =
    $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navbarHeight}, 150);
    scroll = scrollTop;
  }else if (scroll - scrollTop > 50){
    $('.navbar').animate({top: '0px'}, 150);
    scroll = scrollTop;
  }else{
    return false;
  }
})
});
