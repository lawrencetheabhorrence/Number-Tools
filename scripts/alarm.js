audio = new Audio("../sounds/beep.wav")

function sound(){
    audio.loop = false;
    audio.play();
}

function alarm(minutes, seconds){
    time = (60*minutes + seconds)*1000;
    window.setTimeout(sound(), time);
}

function alarm_button(){
    minutes = parseInt(document.getElementById("minutes_input").value);
    seconds = parseInt(document.getElementById("seconds_input").value);
    alarm(minutes, seconds);
}