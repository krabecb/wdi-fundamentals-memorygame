console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	let cardOne = true;

	cardOne = cardTwo === true ? alert("You found a match!") : alert("Sorry, try again.");
}