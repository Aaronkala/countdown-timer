function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            document.querySelector('#time').style.visibility = "hidden";
            document.querySelector('#soaplogo').style.opacity = "1";
        }
    }, 1000);
}

function getTime() {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


// CYCLE BETWEEN BACKGROUND COLORS

var colors = ['#FAE03C', '#98DDDE', '#034F84'];
var active = 0;
setInterval(function() {

    // change background color of body
    document.querySelector('body').style.background = colors[active];
    //change button text hover color
    $("#myStyle").html('.button:hover {color: '+ colors[active] +'}');

    active++;
    if (active == colors.length) active = 0;
}, 10000);


// OPEN WINDOW

function openWindow() {

    var width = 1920;
    var left = 200;

    left += window.screenX;

    window.open("kello.html", 'windowName', 'resizable=1,scrollbars=1,fullscreen=0,height=1080,width=' + width + '  , left=' + left + ', toolbar=0, menubar=0,status=1');
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
