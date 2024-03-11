import { crearDesck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from "./useCases"//por defecto esta importando el index.js dentro de la carpeta useCsases

/*
    2C = two of Clubs       (Treboles)
    2D = two of Diaminds    (Diamantes)
    2H = two of Hearts      (Corazones)
    2S = two of Spades      (Espadas)
*/


let
  deck = [],
  puntosJugadores = []
const
  tipes = ['C', 'D', "H", "S"],
  esps = ["A", "J", "Q", "K"],

  btn_nuevo = document.querySelector("#btn_nuevo"),
  btn_pedir = document.querySelector("#btn_pedir"),
  btn_detener = document.querySelector("#btn_detener"),

  puntosHTML = document.querySelectorAll("small"),
  divCartasJugadores = document.querySelectorAll(".div_cartas");


const IniciarJuego = (numJugadores = 1) => {

  deck = crearDesck(tipes, esps);
  puntosJugadores = [];
  for (let i = 0; i <= numJugadores; i++) {
    puntosJugadores[i] = 0;
  }

  puntosHTML.forEach(small => small.innerText = 0)
  divCartasJugadores.forEach(div => div.innerHTML = '')

  console.clear();
  btn_detener.disabled = false;
  btn_nuevo.disabled = false;
  btn_pedir.disabled = false;

}

btn_pedir.addEventListener("click", () => {

  const carta = pedirCarta(deck)

  acumularPuntos(carta, puntosJugadores, puntosHTML, 0);
  crearCarta(carta, 0, divCartasJugadores);

  if (puntosJugadores[0] > 21) {
    btn_pedir.disabled = true;
    turnoComputadora(deck, puntosJugadores, puntosHTML, divCartasJugadores)
  } else if (puntosJugadores[0] === 21) {
    btn_pedir.disabled = true;
    console.log("21!!!")
    turnoComputadora(deck, puntosJugadores, puntosHTML, divCartasJugadores)
  }
})

btn_detener.addEventListener("click", () => {
  btn_pedir.disabled = true;
  turnoComputadora(deck, puntosJugadores, puntosHTML, divCartasJugadores);

})

btn_nuevo.addEventListener("click", () => {
  IniciarJuego();
})

