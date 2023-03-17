class Card {
    static suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    static ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    constructor(rankIndex, suitIndex) {
        this.rank = Card.ranks[rankIndex];
        this.suit = Card.suits[suitIndex];
    }

    static findRankIndex(rank) {
        return this.ranks.indexOf(rank);
    }
    
    static findSuitIndex(suit) {
        return this.suits.indexOf(suit);
    }

    static getRanksSize() {
        return this.ranks.length;
    }

    static getSuitsSize() {
        return this.ranks.length;
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