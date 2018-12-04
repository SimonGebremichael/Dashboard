$(document).ready(function() {
var topic = "canada";

$.ajax({       
    dataType: 'json',
    url: 'https://newsapi.org/v2/everything?q='+ topic +'&sortBy=popularity&apiKey=491332b3c0e8402b9371b5f1377486ef',
    success: function (data) {
    
        document.getElementById("myart").innerHTML = "";
        for (var i = 0; i <= 2; i++) {
            document.getElementById("myart").innerHTML += '<div id="art"><div id="news">' +
                '<h2 id="newsTit' + i + '"></h2>' +
                '<h3 id="newsName' + i + '"><font color="gray">Source:</font></h3>' +
                '<h3 id="newsAuthor' + i + '"><font color="gray">Author:</font></h3>' +
                '<h3 id="newsDate' + i + '"><font color="gray">Date:</font></h3>' +
                '<font color="gray"><h3>Link:<a id="link1' + i + '" href="" target="_blank"></a></h3></font>' +
                '<div id="newsbot' + i + '"><h3 id="newsDes' + i + '"></h3><h3 id="newsCon' + i + '"></h3></div></div><img src="img/sun.png" id="newsPic' + i + '" /></div>';

            //print tittle
            $("#newsTit" + i).text(data.articles[i].title);

            //print news source
            $("#newsName" + i).append(" " + data.articles[i].source.id);
            if(data.articles[i].source.id == null){
                $("#newsName" + i).append(" " + data.articles[i].source.name);
            }

            $("#newsAuthor" + i).append(" " + data.articles[i].author);

            var dat = data.articles[0].publishedAt.split("T");
            $("#newsDate" + i).append(" " + dat[0]);

            $("#link1" + i).attr("href", data.articles[i].url);
            $("#link1" + i).append(" " + data.articles[i].url);

            $("#newsDes" + i).text(data.articles[i].description);
            $("#newsDes" + i).text(data.articles[i].content);

            
            $("#newsPic" + i).attr("src", data.articles[i].urlToImage);
            if(data.articles[i].urlToImage == ""){
                $("#newsPic" + i).attr("src", "img/loadpic.png");
            }
            
        }
    },
    error: function (data) {
        document.getElementById("myart").innerHTML = "<div id='art'><div id='news'>"+
        "status: " + data.status + "<br>" +
        "code: " + data.code + "<br>" +
        "message: "+ data.message +
        "</div></div>";
    }
});


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
    url: 'https://api.openweathermap.org/data/2.5/find?q=' + 'Kitchener' + '&appid=3a0af56df08b2f1ba9ac41598dcabbea&units=metric'
});





function update(turn) {
    if (turn == true) {
        topic = document.getElementById("searchvalue").value;
    }
    
    if (topic != "") {   
        $.ajax({       
            dataType: 'json',
            url: 'https://newsapi.org/v2/everything?q='+ topic +'&sortBy=popularity&apiKey=491332b3c0e8402b9371b5f1377486ef',
            success: function (data) {
          
                document.getElementById("myart").innerHTML = "";
                for (var i = 0; i <= 2; i++) {
                    document.getElementById("myart").innerHTML += '<div id="art"><div id="news">' +
                        '<h2 id="newsTit' + i + '"></h2>' +
                        '<h3 id="newsName' + i + '"><font color="gray">Source:</font></h3>' +
                        '<h3 id="newsAuthor' + i + '"><font color="gray">Author:</font></h3>' +
                        '<h3 id="newsDate' + i + '"><font color="gray">Date:</font></h3>' +
                        '<font color="gray"><h3>Link:<a id="link1' + i + '" href="" target="_blank"></a></h3></font>' +
                        '<div id="newsbot' + i + '"><h3 id="newsDes' + i + '"></h3><h3 id="newsCon' + i + '"></h3></div></div><img src="img/sun.png" id="newsPic' + i + '" /></div>';

                    //print tittle
                    $("#newsTit" + i).text(data.articles[i].title);

                    //print news source
                    $("#newsName" + i).append(" " + data.articles[i].source.id);
                    if(data.articles[i].source.id == null){
                        $("#newsName" + i).append(" " + data.articles[i].source.name);
                    }

                    $("#newsAuthor" + i).append(" " + data.articles[i].author);

                    var dat = data.articles[0].publishedAt.split("T");
                    $("#newsDate" + i).append(" " + dat[0]);

                    $("#link1" + i).attr("href", data.articles[i].url);
                    $("#link1" + i).append(" " + data.articles[i].url);

                    $("#newsDes" + i).text(data.articles[i].description);
                    $("#newsDes" + i).text(data.articles[i].content);

                    
                    $("#newsPic" + i).attr("src", data.articles[i].urlToImage);
                    if(data.articles[i].urlToImage == ""){
                        $("#newsPic" + i).attr("src", "img/loadpic.png");
                    }
                    
                }
            },
            error: function (data) {
                document.getElementById("myart").innerHTML = "<div id='art'><div id='news'>"+
                "status: " + data.status + "<br>" +
                "code: " + data.code + "<br>" +
                "message: "+ data.message +
                "</div></div>";
            }
        });
    }
}
});