
var wakeuptime;
var dstime;
var sleeptime;

var noon = 12;

function showCurrentTime() {

    var clock = document.getElementById("clock");
    var currentTime = new Data;
    var hours = currentTime.getHours;
    var minutes = currentTime.getMinutes;
    var seconds = currentTime.getSeconds;

    var meridian = "AM";

    if(hours>=noon) {
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;

    changeImage();

}

showCurrentTime();

function changeImage(){

    var time = new Data().getHours;
    console.log(time);

    var images = "img/ds_clock.png";

    var imagesHtml = document.getElementById("timeImage");

    if(time == wakeuptime) {
        images = "img/morning.gif";
        Console.log("morning");
    }

    else if(time == dstime) {
        images = "img/class.gif";
        console.log("classtime");
    }

    else if (time=sleeptime) {

        images = "img/night.gif";
        console.log("sleeptime");
    }

    imagesHtml.src = images;
    console.log(imagesHtml.src);

    
}

function updateClock() {

    var dsTimeSelector = document.getElementById('wakeUpTimeselector');
    wakeuptime = wakeuptimeselector.value;

        var dsTimeSelector = document.getElementById('wakeUpTimeselector');
    dsTime = wakeuptimeselector.value;


        var dsTimeSelector = document.getElementById('wakeUpTimeselector');
    sleeptime = sleeptimeselector.value;

    var saveButton = document.getElementById("SaveButton");
    saveButton.addEventListener("click", updateClock);
}
