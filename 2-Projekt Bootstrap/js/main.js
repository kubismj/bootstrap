$(function(){
    
//    Scroll menu color change
    $(window).scroll(function(){
        if($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({'transition':'all 1.3s'});
        } else {
            $('#main-nav').removeClass('scroll');
        }
    })
//    po refresh nadal będzie menu color 
    if($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll')};
});