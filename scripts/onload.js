console.log("Hello");

// api key
const api_key = "f821f24205353b0d2910fdc1bf40ce0f";

// call link
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

    // animate
    animate_info(0.5);
});