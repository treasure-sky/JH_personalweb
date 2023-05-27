$(document).ready(function(){
    $('.menu-button').off('click').on('click', function(){
        $('.nav').slideToggle(700);
    })

    
    /* 화면 사이즈를 조작시 화면 상단 nav의 display 조작 */
    $(window).resize(function(){
        if($(window).width() >= 1080){
            $('.nav').show(0);
        }
        if($(window).width() < 1080){
            $('.nav').hide(0);
        }
    })

})