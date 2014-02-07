//Attach 3 functions (throwRock, throwPaper, throwScissors) to the buttons. **Use console.log 
//to verify the correct functions are getting called.

//two Global Variables
//playerScore and botScore

//getRobotsThrow()
//**Google JavaScript random number between 0-2 or 1-3.
//Map the nmber to a string
//Returns:
//0 = Rock
//1 = Paper
//2 = Scissors

//getGameOutcome(playerThrow, botThrow)
//** returns win lose, draw

//updateScore - updates Scoreboard 
//updateTeaser - 'You lost haha', 'You won etc' displays teaser at the bottom

//function playGame(playerThrow) {
	//var botThrow = getRobotsThrow();
	//var outcome = getGameOutCome (playerThrow, botThrow);
	//updateScore(outcome)
	//updateTeaser(outcome, playerThrow, botThrow);
//}

var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

function throwRock() {
	console.log('threw rock')
	playGame('rock');
}

function throwPaper() {
	console.log('threw paper')
	playGame('paper');
}

function throwScissors() {
	console.log('threw scissors')
	playGame('scissors');	
}

//Input: nothing
//Output: rock, paper or scissors
function getRobotThrow (){
	var randomNum = Math.floor(Math.random() * 3);

	if (randomNum === 0) {
		return 'rock';
	} 
	else if (randomNum === 1) {
		return 'paper';
	}
	else if (randomNum === 2) {
		return 'scissors';
	}
}


// Input: what the player threw and what the bot threw
// Output: win, lose or tie
function getOutcome(playerThrow, botThrow) {
	if(playerThrow === botThrow) {
		return 'tie';
	}

	else if ( ((playerThrow === "rock") && (botThrow === "scissors")) ||
		 ((playerThrow === "paper") && (botThrow === "rock")) ||
		 ((playerThrow === "scissors") && (botThrow === "paper")) ) {
		return 'win';
	}

	else {
		return 'lose';
	}
}


// Input: win, lose or tie
// Output: no output, but it will update the scores in memory and then update the DOM
function updateScore(outcome) {
	// logic increase the score of whoever won and then update the DOM
	if (outcome === "win") {
		humanScore += 1
	}
	else if (outcome === "lose") {
		computerScore += 1
	}

	document.getElementById('humanScore').innerHTML = humanScore;
	document.getElementById('computerScore').innerHTML = computerScore;
}

function playGame(playerThrow) {
	var botThrow = getRobotThrow ();
	var outcome = getOutcome(playerThrow, botThrow);
    console.log("botThrow: " + botThrow);
    console.log("playerThrow: " + playerThrow);
    console.log('outcome: ' + outcome)
    updateScore(outcome);
    displayTeaser(outcome);
    displayThrows(playerThrow,botThrow);
}

function displayThrows(playerThrow,botThrow) {
	document.getElementById('throws').innerHTML = "you threw " + playerThrow + " and bot threw " + botThrow  
}
// Input: win, lose or tie
// Output: displays teaser - 'You lost haha', 'You won etc'
function displayTeaser(outcome) {
	if (outcome === 'win') {
		document.getElementById('teaser').innerHTML = "You won!"
	}
	else if (outcome === 'lose') {
		document.getElementById('teaser').innerHTML = "You lost, haha"
	}
	else {
		document.getElementById('teaser').innerHTML = "Tie. Play again!"
	}
}





