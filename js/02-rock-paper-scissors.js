//FUNCTION THAT RUNS GAME
function letsPlay() {
    //COLLECT USER'S CHOICE
    let user;
    do {
        user = prompt('Let\'s play Rock, Paper, Scissors! Enter your choice.').toLowerCase();
    } while (user !== 'rock' && user !== 'paper' && user !== 'scissors');

    //GENERATE COMPUTER'S CHOICE
    let computer;
    do {
        computer = Math.floor(Math.random() * 10);
    } while (computer === 9);

    if (computer >= 0 && computer <= 2) {
        computer = 'rock';
    } else if (computer >= 3 && computer <= 5) {
        computer = 'paper';
    } else if (computer >= 6 && computer <= 8) {
        computer = 'scissors';
    }

    //DETERMINE WINNER
    if (user === 'rock') {
        if (computer === 'rock') {
            alert('Rock vs rock, a tie!');
        } else if (computer === 'paper') {
            alert('Rock vs paper, you lose!')
        } else if (computer === 'scissors') {
            alert('Rock vs scissors, you win!');
        }
    }

    if (user === 'paper') {
        if (computer === 'paper') {
            alert('Paper vs paper, a tie!');
        } else if (computer === 'rock') {
            alert('Paper vs rock, you win!');
        } else if (computer === 'scissors') {
            alert('Paper vs scissors, you lose!');
        }
    }

    if (user === 'scissors') {
        if (computer === 'scissors') {
            alert('Scissors vs scissors, a tie!');
        } else if (computer === 'rock') {
            alert('Scissors vs rock, you lose!');
        } else if (computer === 'paper') {
            alert('Scissors vs paper, you win!');
        }
    }
}

//FUNCTION THAT INITIATES GAME
function main() {
    let playAgain = 'y';
    while (playAgain === 'y') {
        letsPlay();
        playAgain = prompt('Would you like to play again? (y/n)', 'y').toLowerCase();
    } 
    alert('Thanks for playing!');
}

//CALLED FUNCTION
main();



