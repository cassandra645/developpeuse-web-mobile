$(document).ready(function() {
    function scroll_to_top(div) {
        $(div).click(function() {
            $('html,body').animate({scrollTop: 130}, 'slow');
        });
        $(window).scroll(function(){
            if($(window).scrollTop()<1800){
                $(div).fadeOut();
            } else{
                $(div).fadeIn();
            }
        });
    }
    scroll_to_top("#scroll_to_top");
});