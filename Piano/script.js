const notes = {
    C: new Audio('sounds/C.mp3'),
    D: new Audio('sounds/D.mp3'),
    E: new Audio('sounds/E.mp3'),
    F: new Audio('sounds/F.mp3'),
    G: new Audio('sounds/G.mp3'),
    A: new Audio('sounds/A.mp3'),
    B: new Audio('sounds/B.mp3')
  };
  
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const note = key.dataset.note;
      notes[note].currentTime = 0; 
      notes[note].play();
    });
  });
  