let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
        startStopBtn.textContent = 'Iniciar';
    } else {
        startTimer();
        startStopBtn.textContent = 'Pausar';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopTimer();
    isRunning = false;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    startStopBtn.textContent = 'Iniciar';
});
