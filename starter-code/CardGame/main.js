console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

/*if (cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
if (cardOne === cardThree) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
if (cardTwo === cardThree) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
if (cardOne === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}*/
var board = getElementId('game-board');
var CreateCards = function() {
 for( var i = 0; i<5; i++);
var cardDeck = document.createElement('div');
game-board.appendChild(cardDeck);
cardDeck.className = 'card';
}
CreateCards(i);