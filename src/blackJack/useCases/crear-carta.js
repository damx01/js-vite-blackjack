export const crearCarta = (carta, turno, divCartasJugadores) => {

    const imgCarta = document.createElement("img");
    imgCarta.classList = "carta"
    imgCarta.src = `./assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(imgCarta);
  
  }