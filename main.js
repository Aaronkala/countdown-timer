var myTime = {};
var myVideo;
function time() {
    var myMinutes = Number(document.getElementById("myMinutes").value);
    var mySeconds = Number(document.getElementById("mySeconds").value);
    var myVideoLink = document.getElementById("myVideoLink").value;
    localStorage.setItem("myMinutes", myMinutes);
    localStorage.setItem("mySeconds", mySeconds);
    localStorage.setItem("myVideoLink", myVideoLink);
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
    myVideo = localStorage.getItem("myVideoLink");
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

function getCssValuePrefix()
{
    var rtrnVal = '';//default to standard syntax
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++)
    {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background)
        {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    return rtrnVal;
}

// SETTING BACKGROUND COLORS
var colorGradient = [{start: "#ff9a9e", end: "#fad0c4"}, {start: "#a18cd1", end: "#fbc2eb"}, {start: "#84fab0", end: "#8fd3f4"}, {start: "a6c0fe", end: "#f68084"}]; 
var orientation = "45deg";
var colors = ['#FAE03C', '#59C9D5', '#EF5229', '#86AF49', '#00939A', '#EF5C6E'];

var active = 0;
var b = 1;
var a = 1;
setInterval(function() {
    console.log(b);
    if(b != 1) {
        b = 1;
        a = 2;
    } else {
        b = 2;
        a = 1;
    }
    var currentBack = ".background" + b;
    console.log(currentBack);
    // change background color of body
    //document.querySelector('body').style.backgroundimage = colors[active];
    document.querySelector(currentBack).style.backgroundImage = getCssValuePrefix() + 'linear-gradient(' + orientation + ', ' + colorGradient[active].start + ', ' + colorGradient[active].end + ')';
    //change button text hover color
    $("#myStyle").html('.button:hover {color: ' + colorGradient[active].start + '}');
    setTimeout(function(){
        document.querySelector('.background'+b).style.opacity = 1;
        document.querySelector('.background'+a).style.opacity = 0;
    }, 2000);

    active++;
    if (active == colorGradient.length) active = 0;
}, 10000);


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
var videolive = 0;
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
        if (timer < 15 && videolive == 0) {
            document.querySelector('.video-foreground').innerHTML = '<iframe src="'+ myVideo +'" frameborder="0" allowfullscreen></iframe>';
            videolive = 1;
        }
        if (--timer < 0) {
            timer = 0;
            document.querySelector('#time').style.visibility = "hidden";
            document.querySelector('.bg').style.opacity = "1";
            document.querySelector('.bg').style.zIndex = "5";
            document.querySelector('.video-foreground').style.zIndex = "20";
        }
    }, 1000);
};
