export const determinarGanador = (puntosJugadores) => {

    const [puntosJugador, puntosComputadora] = puntosJugadores
  
    setTimeout(() => {
  
      if (puntosComputadora === puntosJugador) {
        alert("Nadie Gana")
      } else if (puntosComputadora > 21) {
        alert("Ganaste")
      } else if (puntosJugador > puntosComputadora) {
        alert("ganaste");
      } else {
        alert("perdiste")
      }
    }, 10)
  
  }