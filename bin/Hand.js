const Card = require("./Card.js");

class Hand {
    constructor() {
        this.cards = [];
    }

    copyCards(cards, index, size) {
        let total = cards.length - index;
        let newSize = total < size ? total : size;

        for(let j = 0; j < newSize; j++)
            this.cards.push(cards[j]);
    }

    isFlush() {
        if(this.cards.length > 1) {
            let suit = this.cards[0].getSuit();

            for(let k = 1; k < this.cards.length; k++)
            {
                if(suit !== this.cards[k].getSuit())
                    return false;
            }

            return true;
        }

        return false;
    }

    isStraight() {
            if (this.cards.length === 5) {
                // sort first
                let index = new Array();
                
                // initial indexing
                for(let i = 0; i < this.cards.length; i++)
                    index.push(i);

                for(let i = 0; i < this.cards.length - 1; i++)
                {
                    for(let j = i + 1; j < this.cards.length; j++) {
                        let ii = Card.findRankIndex(this.cards[index[i]].rank);
                        let ij = Card.findRankIndex(this.cards[index[j]].rank);

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

                for(let i = 0; i < this.cards.length; i++) {
                    let rankIndex = Card.findRankIndex(this.cards[index[i]].getRank());
                    if(prevIndex == -1 || (prevIndex + 1) == rankIndex)
                        prevIndex = rankIndex;
                    else return false;
                }

            return true;
        }

        return false;
    }
}

module.exports = Hand;