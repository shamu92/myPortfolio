$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 1) {
            $('header').css("background", "black")
            $('header').css("opacity", ".8")
            $('header a').css("color", "white")


        } else {
            $('header').css("background", "none");
            $('header a').css("color", "black")

        }
    });
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1250);
        return false;
    });
});