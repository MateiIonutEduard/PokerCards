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

            if(!index[newIndex]) {
                this.cards.push(all[newIndex - 1]);
                index[newIndex - 1] = true;
                count--;
            }
        }
    }

    isFlush(cards) {
        let suit = cards[0].getSuit();

        for(let k = 1; k < cards.length; k++)
        {
            if(suit !== cards[k].getSuit())
                return false;
        }

        return true;
    }

    isStraight(cards) {
            if (cards.length > 1) {
                // sort first
                let index = Array();
                
                // initial indexing
                for(let i = 0; i < cards.length; i++)
                    index.push(i);

                for(let i = 0; i < cards.length - 1; i++)
                {
                    for(let j = i + 1; j < cards.length; j++) {
                        let ii = Card.findRankIndex(cards[index[i]].rank);
                        let ij = Card.findRankIndex(cards[index[j]].rank);

                        if(ii > ij)
                        {
                            let ti = index[i];
                            index[i] = index[j];
                            index[j] = ti;
                        }
                    }
                }

                // ready, check if rank of cards are consecutive...
                let prevIndex = -1;

                for(let i = 0; i < cards.length; i++) {
                    let rankIndex = Card.findRankIndex(cards[index[i]].getRank());
                    if(prevIndex == -1 || (prevIndex + 1) == rankIndex)
                        prevIndex = rankIndex;
                    else return false;
                }

            return true;
        }
    }
}

module.exports = Deck;