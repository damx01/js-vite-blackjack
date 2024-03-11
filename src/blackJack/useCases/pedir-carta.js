
/**
 * 
 * @param {array<String>} deck Mazo de cartas
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0)
        throw new Error("No Quedan mas Cartas");

    return deck.pop();

}