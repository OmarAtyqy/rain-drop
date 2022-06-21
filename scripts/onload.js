// api key
var api_key = "f821f24205353b0d2910fdc1bf40ce0f";

function animate_info(coef) {
    // start weather details as shifted and hidden and get their initial condition
    let temperature_text_p = $(".temperature-text p").css('marginBottom');
    $(".temperature-text p").hide()
    $(".temperature-text p").css('marginBottom', '20rem');

    $(".info-text").hide();

    let weather = $(".weather").css('marginRight');
    $(".weather").hide();
    $(".weather").css('marginRight', '-20rem');

    // animate temperature
    setTimeout(function () {
        $(".temperature-text p").fadeIn(400);
        $(".temperature-text p").animate({ marginBottom: temperature_text_p }, 900);
    }, 1200 * coef);

    // animate info-text
    setTimeout(function () {
        $(".info-text").fadeIn(900);
    }, 2250 * coef);

    // animate temperature
    setTimeout(function () {
        $(".weather").fadeIn(400);
        $(".weather").animate({ marginRight: weather }, 900);
    }, 2300 * coef);
}


$(document).ready(function () {

    // call link for london (default city)
    let call_link = `https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1275&appid=${api_key}&units=metric`;

    // make api call and read json result
    $.getJSON(call_link, function (data) {

        // change big temperature
        $("#big-temp").text(data["main"]["temp"].toString().slice(0, 2));

        // change city name
        $("#city").text(capitalizeFirstLetter("London"));

        // change date

        // change status
        $("#status").text(data["weather"][0]["description"]);

        // change clouds
        $("#clouds").text(data["clouds"]["all"]);

        // change humidity
        $("#humidity").text(data["main"]["humidity"]);

        // change wind
        $("#wind").text(data["wind"]["speed"]);

        // change small temp
        $("#small-temp").text(data["main"]["temp"]);

        // change apparent temp
        $("#apparent-temp").text(data["main"]["feels_like"]);
    });

    // start title of page as hidden
    let title_h1 = $(".title h1").css('marginLeft');
    $(".title h1").css('marginLeft', '-20rem');

    // start dashboard hidden
    $(".right-col").hide();

    // animate title
    setTimeout(function () {
        $(".title h1").animate({ marginLeft: title_h1 }, 900);
    }, 250);

    // animate dashboard
    setTimeout(function () {
        $(".right-col").slideDown(1250);
    }, 250);

    animate_info(1);

});