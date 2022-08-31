//RockPaper scissors//

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
    console.log(computerChoice);
    return computerChoiceArray[computerChoice];
};


function getHumanChoice(){
    
    let humanChoice = prompt("Do you choose rock paper or scissors?");
    let lowerCaseChoice = humanChoice.toLowerCase(); //need to save the lowercase value in a nother variable because to lower casee does not alter oginial string
    
    return lowerCaseChoice
};


function playOneRound ( computerChoice, humanChoice) {

   
    
    //Deal with rock case

    if (computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore += 1
        return 'You lost, Rock beats Scissors!';


    } else if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore += 1
        return 'You won, Paper beats Rock!';
        
    } else if (computerChoice == 'rock' && humanChoice == 'rock') {
        
        return 'You tie, you both chose Rock!';
    
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore += 1
        return 'You lost, Paper beats Rock!';

    } else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        humanScore += 1
        return 'You won, Scissors beats Paper!';

    } else if (computerChoice ==  'paper' && humanChoice == 'paper') {

        return 'You tie, you both chose paper';

    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore += 1
        return 'You lost, Scissors beats Paper';

    } else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        humanScore += 1
        return 'You won, Rock beats Scissors';

    } else if (computerChoice == 'scissors' && humanChoice == 'scissors') {

        return 'You tie, you both chose scissors';
    }
}



console.log(playOneRound(getComputerChoice(),getHumanChoice()));
console.log(`Computer score is: ${computerScore} & Human Score is ${humanScore} `)

if (computerScore > humanScore) {
    console.log('COMPUTER WON!');
} else if (computerScore < humanScore) {
    console.log('HUMAN WON!');

} else {

    console.log('YOU BOTH TIED!');
}




