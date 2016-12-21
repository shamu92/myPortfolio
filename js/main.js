$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 1) {
            $('header').css("background", "black")
            $('header').css("opacity", ".85")
            $('header a').css("color", "white")


        } else {
            $('header').css("background", "none");
            $('header a').css("color", "black")

        }
    });
});