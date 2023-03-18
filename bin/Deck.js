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

        for(let j = 0; j < 52; j++)
            index[j] = false;

        let count = 52;
        let all = [];

        for(let j = 0; j < Card.getSuitsSize(); j++) {
            for(let k = 0; k < Card.getRanksSize(); k++) {
                let card = new Card(k, j);
                all.push(card);
            }
        }

        while(count > 0) {
            let newIndex = this.#next(1, 52);

            if(!index[newIndex - 1]) {
                this.cards.push(all[newIndex - 1]);
                index[newIndex - 1] = true;
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