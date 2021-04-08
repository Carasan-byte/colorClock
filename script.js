function colorClock() {

    var date = new Date();

    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (seconds < 9) {
        seconds = '0' + seconds;
    }

    if (minutes < 9) {
        seconds = '0' + seconds;
    }

    if (hours < 9) {
        seconds = '0' + seconds;
    }

    var clockFace = hours + ':' + minutes + ':' + seconds;
    var hexColor = '#' + hours + minutes + seconds;

    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.background = hexColor;

    setTimeout(function () {
        colorClock();
    }, 1000);

}

colorClock();