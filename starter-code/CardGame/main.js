console.log("JS file is connected to HTML! Woo!")


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

var cards = ["queen", "queen","king", "king"];

var cardsInPlay = [];

var board = getElementId('game-board');

function createBoard() {}
	for( var i = 0; i<cards.length; i++); {
var cardElement = document.createElement('div');
cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards);
board.appendChild(cardElement);
	}
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  	if (this.getAttribute('data-card') === 'king') {
  		this.innerHTML = "<img src='http://imgur.com/gallery/yOreVKY'>";
  	}
  	else {
  		this.innerHTML = "<img src='<http://imgur.com/gallery/NvQSc8f'>";
  	}

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  }

}
function isMatch(cards) {
	if (cards[0] === cards[1]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
	}
}
 createBoard(); 

