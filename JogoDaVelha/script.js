const celulas = document.querySelector(".celula");
let checarTurno = true;

const Jogador1 = "X";
const Jogador2 = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id);
    }
});

function jogar(id) {
    const celula = document.getElementById(id);
    turno = checarTurno ? Jogador1 : Jogador2;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checarVencedor(turno);
}
