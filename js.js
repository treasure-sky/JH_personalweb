/* aboutme subtitle 변화 */

var changemotto = ["매일매일 성장하는", "요리를 좋아하는", "자기개발하는", "사진 찍는 것을 좋아하는", "배움을 즐기는", "하고 싶은게 많은"];
var c = -1;
function timeCount(){
    document.getElementById("changingmotto").innerHTML = changemotto[(c=++c%6)];
    setTimeout("timeCount();",700);
}

$(document).ready(function(){

    /* 최초 실행시 화면크기에 따라 nav 표시여부 결정 */
    if($(window).width() >= 1080){
        $('.nav').show(0);
    }
    if($(window).width() < 1080){
        $('.nav').hide(0);
    }
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
    timeCount();

    /* nav 요소 클릭시 페이지 전환 (SPA로 구현) */
    $('#link-aboutme').click(function(){
        $('#interest').addClass('dis-none')
        $('#gallery').addClass('dis-none')
        $('#aboutme').removeClass('dis-none')
        if($(window).width() < 1080){
            $('.nav').slideToggle(700);
        }
    })
    
    $('#link-interest').click(function(){
        $('#interest').removeClass('dis-none')
        $('#gallery').addClass('dis-none')
        $('#aboutme').addClass('dis-none')
        if($(window).width() < 1080){
            $('.nav').slideToggle(700);
        }
    })

    $('#link-gallery').click(function(){
        $('#interest').addClass('dis-none')
        $('#gallery').removeClass('dis-none')
        $('#aboutme').addClass('dis-none')
        if($(window).width() < 1080){
            $('.nav').slideToggle(700);
        }
    })


})