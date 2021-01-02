"use strict";

class Card {
    constructor(day, text, min, max, wind, humidity) {
        this.day = day;
        this.text = text;
        this.min = min;
        this.wind = wind;
        this.humidity = humidity;
    }

    asDomElement() {

        const jumbo = document.createElement("div").className = "pb-4 jumbotron";
        const h1 = document.createElement("h1").className = "display-6";
        const p = document.createElement("p").className = "lead";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        cardBody.appendChild(jumbo);
        cardBody.appendChild(h1);
        cardBody.appendChild(p);

        const li0 = document.createElement("li").className = "list-group-item";
        const li1 = document.createElement("li").className = "list-group-item";
        const li2 = document.createElement("li").className = "list-group-item";

        const ul = document.createElement("ul").className("list-group list-group-flush");
        ul.appendChild(li0);
        ul.appendChild(li1);
        ul.appendChild(li2);

        const cardBox = document.createElement("div");
        cardBox.className = "m-3 card";
        cardBox.setAttribute("style", "width: 200px");

        cardBox.appendChild(cardBody);
        cardBox.appendChild(ul);

        return cardBox;
 
    }

}


function init() {
    let clear = document.getElementById("clear");
    clear.addEventListener("click", function clearDisplay() {
    clear.querySelectorAll('*').forEach(c => c.remove());
    });
}

function getWeatherData(city) {
    city = document.querySelector(".form-control").value;
}

const cards = [
    {
        day: "Monday",
        text: "Cold",
        min: 1,
        max: 2,
        wind: 30,
        humidity: 20
    },
    {
        day: "Tuesday",
        text: "Still cold",
        min: 1,
        max: 3,
        wind: 20,
        humidity:20
    }
];












