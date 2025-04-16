let timer;
let isRunning = false;

// Contadores de tempo
let seconds = 0;
let minutes = 0;

// Elementos da interface (DOM)
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Atualiza o visor com o tempo formatado como MM:SS (minuto e segundo)
function updateDisplay() {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Inicia o cronômetro: incrementa o tempo a cada segundo
function startTimer() {
    timer = setInterval(() => {
        seconds++;

        // Quando chega a 60 segundos, reseta os segundos e aumenta os minutos
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 1000); // Executa a cada 1000 milissegundos (1 segundo)
}

// Para o cronômetro (pausa)
function stopTimer() {
    clearInterval(timer);
}

// Lógica do botão iniciar/pausar
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();                        // Pausa
        startStopBtn.textContent = 'Iniciar';
    } else {
        startTimer();                       // Inicia
        startStopBtn.textContent = 'Pausar';
    }
    isRunning = !isRunning;                // Inverte o estado atual
});

// Lógica do botão resetar
resetBtn.addEventListener('click', () => {
    stopTimer();                            // Para o cronômetro
    isRunning = false;
    seconds = 0;
    minutes = 0;
    updateDisplay();                        // Zera o visor
    startStopBtn.textContent = 'Iniciar';   // Volta o botão para o estado inicial
});
