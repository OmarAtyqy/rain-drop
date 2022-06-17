// function to update value of weather
function update_weather() {

    // get chosen location
    let location = $("#location").val().trim().toLowerCase();

    // check if location is valid, if not, vibrate search box to indicate error
    if (!(cities_lower.includes(location))) {
        $(".button-area i").effect("shake", {"direction": "left", "distance": 15, "times": 3});
    }
    else {

        // if location is valid, return coordinates from dictionary
        console.log(cities_dic[location]);
    }
    
}