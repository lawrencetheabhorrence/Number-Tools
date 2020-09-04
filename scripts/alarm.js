
function sound(){
    audio = new Audio("C:\Users\Huang\Documents\karanNumbers\sounds\beep.wav");
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