//RockPaper scissors//


function getComputerChoice() {

    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
    console.log(computerChoice)
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
        
        return 'You lost, Rock beats Scissors!';

    } else if (computerChoice == 'rock' && humanChoice == 'paper') {
        
        return 'You won, Paper beats Rock!';

    } else if (computerChoice == 'rock' && humanChoice == 'rock') {
        
        return 'You tie, you both chose Rock!';
    
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        
        return 'You lost, Paper beats Rock!';

    } else if (computerChoice == 'paper' && humanChoice == 'scissors') {

        return 'You won, Scissors beats Paper!';

    } else if (computerChoice ==  'paper' && humanChoice == 'paper') {

        return 'You tie, you both chose paper';

    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        
        return 'You lost, Scissors beats Paper';

    } else if (computerChoice == 'scissors' && humanChoice == 'rock') {

        return 'You won, Rock beats Scissors';

    } else if (computerChoice == 'scissors' && humanChoice == 'scissors') {

        return 'You tie, you both chose scissors';
    }
    
}

console.log(playOneRound(getComputerChoice(),getHumanChoice()));



let computerScore = 0;

let humanScore = 0;


