$(document).ready(function() {
var loc = "Kitchener";

function map(city) {
    if (city == true) {
        loc = prompt("change city?");
    }

    $.ajax({
        dataType: 'json',
        success: function (data) {
            $("#cityName").text(data.list[0].name);
            $("#cityName").append(", " + data.list[0].sys.country);
            $("#cityTemp").text(data.list[0].main.temp);
            $("#cityTemp2").text(Math.round(data.list[0].main.temp), 0);
            
            $("#cityhumidity").text("humidity: " + data.list[0].main.humidity);
            $("#CityDec").text(data.list[0].weather[0].description);

            if (data.list[0].weather[0].main == "Clear") {
                $("#cityImg").attr("src", "img/sun.png");
            } else if (data.list[0].weather[0].main == "Clouds") {
                $("#cityImg").attr("src", "img/cloud.png");
            } else if (data.list[0].weather[0].main == "Fog") {
                $("#cityImg").attr("src", "img/fog.png");
            } else if (data.list[0].weather[0].main == "Rain") {
                $("#cityImg").attr("src", "img/Rain.png");
            }else if (data.list[0].weather[0].main == "Snow") {
                $("#cityImg").attr("src", "img/snow.png");
            }else if (data.list[0].weather[0].main == "Mist") {
                $("#cityImg").attr("src", "img/mist.png");
            } else {
                $("#cityImg").attr("src", "img/sun.png");
            }
        },
        url: 'http://api.openweathermap.org/data/2.5/find?q=' + loc + '&appid=3a0af56df08b2f1ba9ac41598dcabbea&units=metric'
    });

}
});