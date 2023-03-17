#!/usr/bin/env node
const Card = require("./Card.js");
const Deck = require("./Deck.js");

let deck = new Deck();

for(let i = 0; i < deck.cards.length; i++)
    console.log(deck.cards[i].getSuit() + " " + deck.cards[i].getRank() + "\n");

let v = Array();
let u = [ '10','K','A','J','Q' ];

for(let j = 0; j < 5; j++)
{
    let rankIndex = Card.findRankIndex(u[j]);
    let suitIndex = Card.findSuitIndex(deck.cards[j].getSuit());

    var c = new Card(rankIndex, suitIndex);
    v.push(c);
}

console.log(v);
console.log(deck.isStraight(v));