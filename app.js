const result = document.getElementById('result')


const playGame = function () {
    let rounds = prompt('How many games would you like to play?');
    while (isNaN(rounds)) {
        rounds = prompt('Please enter a valid number.');
    }
    rounds = parseInt(rounds);

    let count = 1;
    let playerScore = 0, compScore = 0

    while (count <= rounds) {
        const choices = ['rock', 'paper', 'scissors'];

        let player = prompt('Choose either rock, paper, or scissors');

        let index = Math.floor(Math.random() * 3)
        let compChoice = choices[index]

        let playerChoice = player.toLowerCase();

        while (choices.every(choice => choice != playerChoice)) {
            playerChoice = prompt('Please enter a valid choice.');
        }

        console.log(`Round: ${count} - Player: ${playerChoice}, Computer: ${compChoice}`)


        if (playerChoice === compChoice) {
            console.log(`Round ${count} is a tie!`)
        } else {
            switch (playerChoice) {
                case 'rock':
                    if (compChoice === 'paper') {
                        console.log(`Computer wins round ${count}!`)
                        compScore++
                    } else {
                        console.log(`You win round ${count}!`)
                        playerScore++
                    }
                    break;

                case 'paper':
                    if (compChoice === 'scissors') {
                        console.log(`Computer wins round ${count}!`)
                        compScore++
                    } else {
                        console.log(`You win round ${count}!`)
                        playerScore++
                    }
                    break;

                case 'scissors':
                    if (compChoice === 'rock') {
                        console.log(`Computer wins round ${count}!`)
                        compScore++
                    } else {
                        console.log(`You win round ${count}!`)
                        playerScore++
                    }
                    break;
            }
        }

        count++
    }
    result.innerHTML = `Game Over! Score: Player ${playerScore}, Computer ${compScore}`;
    return `Game Over! Score: Player ${playerScore}, Computer ${compScore}`
}