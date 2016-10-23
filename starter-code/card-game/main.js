console.log("JS file is connected to HTML! Woo!");


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

var cards = ["queen","king","queen","king"];

var cardsInPlay = [];

var board = document.getElementById("game-board");

function createBoard() {
	for (i = 0; i < cards.length; i++); {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);
		//board.appendChild(cardElement);
		//board.appendChild(cardElement);
	}

}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'queen') {
  		this.innerHTML = '<img src="queen of spades.jpg" alt="Queen of Spades" />';
  	}
  	else {
  		this.innerHTML = '<img src="king of spades.jpg" alt="King of Spades" />';
  	}

  	if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
  }
}

function isMatch(cards) {
	if ((cards[0] === cards[2])||(cards[1] === cards[3])) {
	alert("You found a match!");
}
	else {
	alert("Sorry, try again.");
	}
}

 createBoard();
