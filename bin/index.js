#!/usr/bin/env node
const Card = require("./Card.js");
const Deck = require("./Deck.js");
const Hand = require("./Hand.js");

let deck = new Deck();

for(let i = 0; i < deck.cards.length; i++)
    console.log(deck.cards[i].getSuit() + " " + deck.cards[i].getRank() + "\n");

    let count = -1;

for(let j = 0; j < deck.cards.length; j += 5) {
    let hand = new Hand();
    hand.copyCards(deck.cards, j, 5);
    console.log(hand.isFlush() ? hand.cards : hand.isFlush());
    count++;
}

console.log(`total: ${count}`);