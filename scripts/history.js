class HistoryItem {

    constructor(location, lat, lgt) {
        this.location = location;
        this.lat = lat;
        this.lgt = lgt;
    };

    getElement() {
        const name = this.location.charAt(0).toUpperCase() + this.location.slice(1);
        let li = document.createElement("li");
        let textNode = document.createTextNode(name);
        li.appendChild(textNode);
        li.onclick = () => {
            search_city(this.location, this.lat, this.lgt);
        }
        return li;
    };
}

class History {
    constructor(limit) {
        this.list = [];
        this.limit = limit;
    };

    addItem(item) {
        if (this.list.length >= this.limit) {
            this.list.shift();
        }
        this.list.push(item);
    };

    displayItems() {
        //remove all items
        $("#history").empty();

        // adding items to DOM
        let ul = document.getElementById("history");
        let copy = this.list.slice().reverse();
        for (let x of copy) {
            ul.appendChild(x.getElement());
        }
    };
}