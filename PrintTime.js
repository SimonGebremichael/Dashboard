var theType = true;

function theswitch() {
    theType = !theType;
}

setInterval(function () {

    var time = Date();
    var timesec = time.split(" ");
    var zone = timesec[4].split(":");

    var am = "AM";
    if (zone[0] > 12) {
        am = "PM";
    }


    if (theType == true) {
        document.getElementById("time").value = timesec[4] + am;
    } else {
        if (am == "PM") {
            var x = zone[0] - 12;
            document.getElementById("time").value = " " + x + ":" + zone[1] + ":" + zone[2] + "PM";
        } else {
            document.getElementById("time").innerHTML = "A" + ":" + zone[1] + ":" + zone[2] + "PM";
        }
    }


    document.getElementById("day").innerHTML = timesec[0] + "day";
    document.getElementById("month").innerHTML = timesec[1] + "." + timesec[2] + "." + timesec[3];


    var d = new Date().getMinutes();
    var ma = zone[0] * 60 + d;
    var c = Math.round((ma / 1440) * 100, 0);
    document.getElementById("time2").innerHTML = c + "%";



    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var perday = Math.round((day / 365) * 100, 0);

    document.getElementById("time3").innerHTML = perday + "%";

}, 100);