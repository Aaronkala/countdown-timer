function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function getTime() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// BACKGROUND COLOR CHANGE

var colors = ['#FAE03C', '#98DDDE', '#034F84'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 30000);



// OPEN WINDOW

function openWindow() {

    var width = 1920;
    var left = 200;

    left += window.screenX;

    window.open("kello.html",'windowName','resizable=1,scrollbars=1,fullscreen=0,height=1080,width=' + width + '  , left=' + left + ', toolbar=0, menubar=0,status=1');
    return 0;

}

// Find the right method, call on correct element
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  getTime();
}
