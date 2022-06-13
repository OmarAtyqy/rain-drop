$(document).ready(function() {

    // start title of page as hidden
    let title_h1 = $(".title h1").css('marginLeft');
    $(".title h1").css('marginLeft', '-20rem');

    // start weather details as shifted and hidden and get their initial condition
    let temperature_text_p = $(".temperature-text p").css('marginBottom');
    $(".temperature-text p").hide()
    $(".temperature-text p").css('marginBottom', '20rem');

    let info_wraper_hr = $(".info-wraper hr").css('marginLeft');
    $(".info-wraper hr").hide();
    $(".info-wraper hr").css('marginLeft', '-100rem');

    $(".info-text").hide();

    let weather = $(".weather").css('marginRight');
    $(".weather").hide();
    $(".weather").css('marginRight', '-20rem');

    // start dashboard hidden
    $(".right-col").hide();

    // animate title
    setTimeout(function() {
        $(".title h1").animate({marginLeft: title_h1}, 900);
    }, 250);

    // animate temperature
    setTimeout(function() {
        $(".temperature-text p").fadeIn(400);
        $(".temperature-text p").animate({marginBottom: temperature_text_p}, 900);
    }, 1200);

    // animate info-text
    setTimeout(function() {
        $(".info-text").fadeIn(900);
    }, 2250);

    // animate temperature
    setTimeout(function() {
        $(".weather").fadeIn(400);
        $(".weather").animate({marginRight: weather}, 900);
    }, 1200);

    // animate hr
    setTimeout(function() {
        $(".info-wraper hr").fadeIn();
        $(".info-wraper hr").animate({marginLeft: info_wraper_hr}, 900);
    }, 2200);

    // animate dashboard
    setTimeout(function() {
        $(".right-col").slideDown(1250);
    }, 250);
    
});