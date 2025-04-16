const display = document.getElementById('display');

const notes = {
  Dó: new Audio('sounds/do.mp3'),
  Ré: new Audio('sounds/re.mp3'),
  Mi: new Audio('sounds/mi.mp3'),
  Fá: new Audio('sounds/fa.mp3'),
  Sol: new Audio('sounds/sol.mp3'),
  Lá: new Audio('sounds/la.mp3'),
  Si: new Audio('sounds/si.mp3')
};

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    
    // Mostrar a nota no display
    display.textContent += ` ${note}`;
    
    // Tocar o som correspondente
    if (notes[note]) {
      notes[note].currentTime = 0; // reinicia o som
      notes[note].play();
    }
  });
});
