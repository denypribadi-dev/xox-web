const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach((square) => {
	square.addEventListener('click', handleClick);
});

function handleClick(event) {
	const square = event.target;
	if (square.innerHTML !== '') return;
	square.innerHTML = currentPlayer;
	checkGameStatus();
	switchPlayer();
}

function checkGameStatus() {
	const squaresArray = Array.from(squares);
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (squaresArray[a].innerHTML === currentPlayer &&
			squaresArray[b].innerHTML === currentPlayer &&
			squaresArray[c].innerHTML === currentPlayer) {
			alert(`${currentPlayer} wins!`);
			resetGame();
			return;
		}
	}
	
	const isTie = squaresArray.every((square) => square.innerHTML !== '');
	if (isTie) {
		alert('It\'s a tie!');
		resetGame();
		return;
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
	squares.forEach((square) => {
		square.innerHTML = '';
	});
	currentPlayer = 'X';
}