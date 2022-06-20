class HistoryItem {

    constructor(location, lat, lgt) {
        this.location = location;
        this.lat = lat;
        this.lgt = lgt;
        this.data = getData();
    };

    getData() {
        // call link
        let call_link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;

        // make api call and read json result
        $.getJSON(call_link, function (data) {
            return data;
        });
    };

    getElement() {
        const name = this.location.charAt(0).toUpperCase() + this.location.slice(1);
        return `<li>${name}</li>`
    };
}

class History {
    constructor(limit) {
        this.list = [];
        this.limit = limit;
    };

    addItem(item) {
        this.list.push(item);
    };

    displayItems() {

    };
}