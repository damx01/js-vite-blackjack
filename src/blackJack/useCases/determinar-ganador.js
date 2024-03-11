export const determinarGanador = (puntosJugadores) => {

    const [puntosJugador, puntosComputadora] = puntosJugadores
  
    setTimeout(() => {
  
      if (puntosComputadora === puntosJugador) {
        console.log("Nadie Gana")
      } else if (puntosComputadora > 21) {
        console.log("Ganaste")
      } else if (puntosJugador > puntosComputadora) {
        console.log("ganaste");
      } else {
        console.log("perdiste")
      }
    }, 10)
  
  }