let start = document.getElementById('start');
let reset = document.getElementById('reset');
let count = document.getElementById('count');
let stop = document.getElementById('stop');


let second = 0;
let minute = 0;
let hours = 0;
let displayTime;
let intervalId = 0;

function increaseCount() {
    second++
    if (second === 60) {
        second = 0
        minute++
    }
    if (minute === 60) {
        minute = 0
        hours++
    }

    displayTime = `${hours}:${minute}:${second}`
    display()
}

function display() {
    count.textContent = displayTime;
}

function ClearInterval() {
    clearInterval(intervalId)
    intervalId = 0;
}

start.addEventListener('click', () => {
    if (intervalId === 0) {
        intervalId = setInterval(increaseCount, 1000);
    }
})

stop.addEventListener('click', () => {
    ClearInterval()
})

reset.addEventListener('click', () => {
    second = 0;
    minute = 0;
    hours = 0
    displayTime = `${hours}:${minute}:${second}`
    ClearInterval()
    display()
})