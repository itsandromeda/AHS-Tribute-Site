/*global document, window*/
var seasons = [{
    season: "Murder House",
    src: "assets/images/ahs-1.jpg"
}, {
    season: "Asylum",
    src: "assets/images/ahs-2.jpg"
}, {
    season: "Coven",
    src: "assets/images/ahs-3.jpg"
}, {
    season: "Freak Show",
    src: "assets/images/ahs-4.jpg"
}];

var season = seasons.map(function (e) {
    "use strict";
    return e.season;
});

var source = seasons.map(function (e) {
    "use strict";
    return e.src;
});

function print(alt, src, i) {
    "use strict";
    var gallery = document.getElementById("gallery"),
        figure = document.createElement("figure"),
        img = document.createElement("img"),
        span = document.createElement("span"),
        spanText = document.createTextNode("x");

    img.classList.add("item");
    img.classList.add("black-white");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    span.classList.add("delete");
    span.appendChild(spanText);

    span.addEventListener('click', function (e) {
        var parentSpan = e.target.parentNode;
        parentSpan.setAttribute("class", "hide");
    });

    figure.setAttribute("id", "fig" + i);
    figure.classList.add("show");
    figure.appendChild(img);
    figure.appendChild(span);
    gallery.appendChild(figure);
}

window.addEventListener('load', function () {
    "use strict";
    var i;

    for (i = 0; i < seasons.length; i += 1) {
        print(season[i], source[i], i);
    }
});

document.getElementById("extras").addEventListener("click", function () {
    "use strict";
    document.getElementById("text-a").classList.toggle("hide");
});

document.getElementById("about").addEventListener("click", function () {
    "use strict";
    document.getElementById("text-b").classList.toggle("hide");
});

document.getElementById("show-gallery").addEventListener("click", function () {
    "use strict";
    var photos = document.getElementsByClassName("show"),
        i;

    for (i = 0; i < seasons.length; i += 1) {
        if (document.getElementById("fig" + i).classList.contains("hide")) {
            document.getElementById("fig" + i).classList.remove("hide");
            document.getElementById("fig" + i).classList.add("show");
        }
    }
});