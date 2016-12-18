var myTime = {};

function time() {
    var myMinutes = Number(document.getElementById("myMinutes").value);
    var mySeconds = Number(document.getElementById("mySeconds").value);
    localStorage.setItem("myMinutes", myMinutes);
    localStorage.setItem("mySeconds", mySeconds);
    openWindow();
};

function getTime() {
    var duration = localStorage.getItem("duration");
    var display = localStorage.getItem("display");
    startTimer(duration, display);
};

// DISPLAY INPUTTED TIME ON PAGE LOAD

function displayTime() {
    display = document.querySelector('#time');
    localStorage.setItem("display", display);

    var myMinutes = localStorage.getItem("myMinutes");
    var mySeconds = localStorage.getItem("mySeconds");
    var duration = (60 * Number(myMinutes)) + Number(mySeconds);

    localStorage.setItem("duration", duration);

    var timer = duration,
        minutes, seconds;

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
}

// CYCLE BETWEEN BACKGROUND COLORS

var colors = ['#FAE03C', '#98DDDE', '#034F84'];
var active = 0;
setInterval(function() {

    // change background color of body
    document.querySelector('body').style.background = colors[active];
    //change button text hover color
    $("#myStyle").html('.button:hover {color: ' + colors[active] + '}');

    active++;
    if (active == colors.length) active = 0;
}, 30000);


// OPEN WINDOW

function openWindow() {

    var width = 1920;
    var left = 1000;

    left += window.screenX;

    window.open("kello.html", 'countdown', 'resizable=1,scrollbars=1,fullscreen=0,height=1080,width=' + width + '  , left=' + left + ', toolbar=0, menubar=0,status=1');
    return 0;

}

// Find the right method, call on correct element

function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    getTime();
}

function startTimer(duration, display) {
    display = document.querySelector('#time');
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

// HIDING THE TIMER AND SHOWING PICTURE

        display.textContent = minutes + ":" + seconds;
        console.log(minutes + ":" + seconds);
        if (--timer < 0) {
            timer = 0;
            document.querySelector('#time').style.visibility = "hidden";
            document.querySelector('.bg').style.opacity = "1";
        }
    }, 1000);
};
