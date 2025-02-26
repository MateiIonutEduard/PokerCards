const Card = require("./Card.js");
const Hand = require("./Hand.js");

class Deck {
    constructor() {
        this.cards = [];
        this.shuffle();
    }

    #next(low, high) {
        let res = Math.random() * (high - low + 1) + low;
        return Math.floor(res);
    }

    shuffle() {
        this.cards = [];
        let index = new Array(52);
        let count = 52;

        for(let j = 0; j < 52; j++)
            index[j] = false;

        while(count > 0) {
            let newIndex = this.#next(1, 52) - 1;
            let rankSize = Card.getRanksSize();

            /* optimize the card shuffling algorithm for the game deck */
            let suitIndex = Math.floor(newIndex / rankSize);
            let rankIndex = newIndex % rankSize;
            let newCard = new Card(rankIndex, suitIndex);

            /* the indexes of the suit and rank in the initial order are required to recover the real card */
            if(!index[newIndex]) {
                this.cards.push(newCard);
                index[newIndex] = true;
                count--;
            }
        }
    }

    getHand(index, size) {
        let hand = new Hand(size);
        hand.copyCards(this.cards, index, size);
        return hand;
    }
}

module.exports = Deck;