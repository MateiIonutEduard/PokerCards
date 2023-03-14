#!/usr/bin/env node
const Card = require("./Card.js");
const Deck = require("./Deck.js");

let deck = new Deck();

for(let i = 0; i < deck.cards.length; i++)
console.log(deck.cards[i].suit + " " + deck.cards[i].rank + "\n");

let v = Array();
let u = [ '10','K','A','J','Q' ];

for(let j = 0; j < 5; j++)
{
    var c = new Card(u[j], deck.cards[j].suit);
    v.push(c);
}

console.log(v);
console.log(deck.isStraight(v));