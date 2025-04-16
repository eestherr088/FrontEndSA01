'use strict'

// Seletores e variáveis iniciais
const doc = document 
const cells = Array.from(doc.querySelectorAll('.board > span'))  // células do tabuleiro
const resetButton = doc.querySelector('#reset')

let isPlayer0 = true  // alterna turno
let boardState = new Array(9).fill(null)  // estado do tabuleiro

const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Colunas
  [0, 4, 8], [2, 4, 6]             // Diagonais
]

// Inicializa eventos
function setupEvents(enable) {
  resetButton.addEventListener('click', resetGame)

  for (let cell of cells) {
    if (enable) {
      cell.addEventListener('click', handlePlay)
    } else {
      cell.removeEventListener('click', handlePlay)
    }
  }
}
setupEvents(true)

// Função principal de jogada
function handlePlay(event) {
  const cell = event.target

  if (!cell.innerHTML) {
    isPlayer0 = !isPlayer0
    const currentPlayer = isPlayer0 ? 'O' : 'X'

    // Atualiza a célula clicada
    cell.innerHTML = `<h1 name="${currentPlayer}">${currentPlayer}</h1>`

    const cellIndex = parseInt(cell.id.split(/\D+/g)[1])
    updateGame(cellIndex, currentPlayer)
  }
}

// Atualiza o jogo e verifica vitória
function updateGame(index, symbol) {
  boardState[index] = symbol
  console.log(boardState)

  for (let [a, b, c] of winCombos) {
    if (checkWin(boardState[a], boardState[b], boardState[c])) {
      console.log(symbol, 'wins!')
      setupEvents(false)

      // Destaca células vencedoras
      cells[a].classList.add('win')
      cells[b].classList.add('win')
      cells[c].classList.add('win')
      break
    }
  }
}

// Compara 3 valores para verificar vitória
function checkWin(a, b, c) {
  return a && b && c && a === b && b === c
}

// Reseta o jogo
function resetGame() {
  for (let cell of cells) {
    cell.classList.remove('win')
    cell.innerHTML = ''
  }
  boardState = new Array(9).fill(null)
  setupEvents(true)
}