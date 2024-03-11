import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acomular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador"

export const turnoComputadora = (deck, puntosJugadores, puntosHTML, divCartasJugadores) => {

    const puntosMinimos = puntosJugadores[0];
    const turnoComputadora = puntosJugadores.length - 1

    do {
        const carta = pedirCarta(deck)

        acumularPuntos(carta, puntosJugadores, puntosHTML, turnoComputadora);



        crearCarta(carta, turnoComputadora, divCartasJugadores)

    } while (puntosJugadores[turnoComputadora] < puntosMinimos && puntosMinimos <= 21)

    determinarGanador(puntosJugadores);
    btn_detener.disabled = true;
}
