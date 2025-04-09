const lamp = document.getElementById('lamp');
const toggleBtn = document.getElementById('toggleBtn');

function toggleLamp() {
    if (lamp.classList.contains('apagada')) {
        lamp.classList.remove('apagada');
        lamp.classList.add('acesa');
        toggleBtn.textContent = 'Apagar';
    } else {
        lamp.classList.remove('acesa');
        lamp.classList.add('apagada');
        toggleBtn.textContent = 'Acender';
    }
}

toggleBtn.addEventListener('click', toggleLamp);
