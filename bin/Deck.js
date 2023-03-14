const Card = require("./Card.js");

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
        let suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
        let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        let index = new Array(52);

        for(let j = 0; j < 52; j++)
            index[j] = false;

        let count = 52;
        let all = [];

        for(let j = 0; j < suits.length; j++) {
            for(let k = 0; k < ranks.length; k++) {
                let card = new Card(ranks[k], suits[j]);
                all.push(card);
            }
        }

        while(count > 0) {
            let newIndex = this.#next(1, 52);

            if(!index[newIndex]) {
                this.cards.push(all[newIndex - 1]);
                index[newIndex - 1] = true;
                count--;
            }
        }
    }

    isFlush(cards) {
        let suit = cards[0].suit;

        for(let k = 1; k < cards.length; k++)
        {
            if(suit !== cards[k].suit)
                return false;
        }

        return true;
    }

    isStraight(cards) {
            if (cards.length > 1) {
                // sort first
                let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
                let index = Array();
                
                // initial indexing
                for(let i = 0; i < cards.length; i++)
                    index.push(i);

                for(let i = 0; i < cards.length - 1; i++)
                {
                    for(let j = i + 1; j < cards.length; j++) {
                        let ii = ranks.indexOf(cards[index[i]].rank) + 1;
                        let ij = ranks.indexOf(cards[index[j]].rank) + 1;

                        if(ii > ij)
                        {
                            let ti = index[i];
                            index[i] = index[j];
                            index[j] = ti;
                        }
                    }
                }

                // ready, check if rank of cards are consecutive...
                let prev = -1;

                for(let i = 0; i < cards.length; i++) {
                    let u = ranks.indexOf(cards[index[i]].rank);
                    if(prev == -1 || (prev + 1) == u)
                        prev = u;
                    else return false;
                }

            return true;
        }
    }
}

module.exports = Deck;