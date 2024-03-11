import _ from "underscore";

/**
 * 
 * @param {Array<String>} tipeOfCard Ejemplo : ['C', 'D', "H", "S"]
 * @param {Array<String>} especialTipeCard Ejemplo : ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDesck = (tipeOfCard, especialTipeCard) => {

    if (!tipeOfCard || tipeOfCard.lenght === 0)
        throw new Error('tipeOFCard es obligatorio')

    if (!especialTipeCard || especialTipeCard.lenght === 0)
        throw new Error('especialTipeCard es obligatorio')

    let deck = [];

    for (let tipe of tipeOfCard) {

        for (let i = 2; i <= 10; i++) {
            deck.push(i + tipe);
        }
        for (let esp of especialTipeCard) {
            deck.push(esp + tipe)
        }
    }
    return _.shuffle(deck);
}
