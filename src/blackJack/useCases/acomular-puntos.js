import { valorCarta } from "./valor-carta";

export const acumularPuntos = (carta, puntosJugadores, puntosHTML, turno) => {

    puntosJugadores[turno] += valorCarta(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno];
}