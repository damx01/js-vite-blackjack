/**
 * 
 * @param {String} carta ejemplo :"10S" 
 * @returns {Number} Valor de la carta Ejemplo :10
 */
export const valorCarta = (carta) => {

    const valor = carta.slice(0, -1);
    return isNaN(valor) ?
        valor === "A" ? 11 : 10
        : Number(valor)
}