class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getRank() {
        return this.rank;
    }

    setRank(val) {
        this.rank = val;
    }

    getSuit() {
        return this.suit;
    }

    setSuit(val) {
        this.suit = val;
    }
}

module.exports = Card;