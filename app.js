
const playGame = function () {
    let rounds = prompt('How many games would you like to play?');
    rounds = parseInt(rounds);

    let count = 1;
    let playerScore = 0, compScore = 0

    while (count <= rounds) {
        let player = prompt('Choose either rock, paper, or scissors');

        const choices = ['Rock', 'Paper', 'Scissors'];
        let index = Math.floor(Math.random() * 3)

        let computer = choices[index]
        console.log(`Round: ${count} - Player: ${player}, Computer: ${computer}`)

        let playerChoice = player.toLowerCase();
        let compChoice = computer.toLowerCase();


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
    console.log(`Round ${count}, Score: Player ${playerScore}, Computer ${compScore}`)
}