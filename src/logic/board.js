import { WINNER_COMBOS } from '../constants'

//Función para verificar si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

//Funcion para verificar si hay empate
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}