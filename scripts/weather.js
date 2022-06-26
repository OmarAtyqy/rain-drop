let history = new History(4);

let ini_font;
setTimeout(function () {
    ini_font = parseFloat($("#city").css('fontSize'));
}, 2300);

// return weather status of city
function search_city(location, latitude, longitude) {

    // call link
    let call_link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;

    // make api call and read json result
    $.getJSON(call_link, function (data) {

        // change big temperature
        $("#big-temp").text(data["main"]["feels_like"].toString().slice(0, 2));

        // change city name
        $("#city").text(capitalizeFirstLetter(location));
        let number_words = location.split(' ').length;
        let new_font = (ini_font / number_words);
        if (number_words > 1) {
            new_font = new_font * 1.35;
        }
        $("#city").css('fontSize', `${new_font}px`);

        // change date
        $("#date").text(get_date());

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
}

// function that's called when the search button is pressed
function search_button() {

    // get chosen location
    let location = $("#location").val().trim().toLowerCase();

    // check if location is valid, if not, vibrate search box to indicate error
    if (!(cities_lower.includes(location))) {
        $(".button-area i").effect("shake", { "direction": "left", "distance": 15, "times": 3 });
    }
    else {

        // if location is valid, call function to look up weather in city
        const latitude = cities_dic[location][0];
        const longitude = cities_dic[location][1];

        search_city(location, latitude, longitude);

        // add item to history
        let item = new HistoryItem(location, latitude, longitude);
        history.addItem(item);

        // display new history
        history.displayItems();
    }

}