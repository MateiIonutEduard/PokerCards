#!/usr/bin/env node
const Card = require("./Card.js");
const Deck = require("./Deck.js");
const Hand = require("./Hand.js");

let deck = new Deck();

for(let i = 0; i < deck.cards.length; i++)
    console.log(deck.cards[i].getSuit() + " " + deck.cards[i].getRank() + "\n");

let v = Array();
let u = [ 'A', '5', '2', '3', '4' ];

for(let j = 0; j < 5; j++)
{
    let rankIndex = Card.findRankIndex(u[j]);
    let suitIndex = Card.findSuitIndex(deck.cards[j].getSuit());

    var c = new Card(rankIndex, suitIndex);
    v.push(c);
}

let hand = new Hand();
hand.copyCards(v, 0);

console.log(hand.isFlush());
console.log(hand.isStraight());
console.log(hand.getCards());