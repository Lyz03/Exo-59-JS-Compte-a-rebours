let timer = document.getElementById('timer');
let i = 60

function timerWithDelay() {
    timer.innerText = i.toString();
    i -= 1;
    if (i === 0) {
        stopTimer();
    }
}

let interval = setInterval(timerWithDelay, 1000);

function stopTimer(){
    clearInterval(interval);
    timer.innerText = "0"
}
