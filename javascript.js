//RockPaper scissors//
let humanChoice

let rock = document.querySelector(".rock")

let paper = document.querySelector(".paper")

let scissors = document.querySelector(".scissors")

let yourScore = document.querySelector(".yourScore")

let compScore = document.querySelector(".computerScore")





rock.addEventListener("click",function() { humanChoice = 'rock';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,compScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;})

paper.addEventListener("click",function() { humanChoice = 'paper';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,computerScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;})

scissors.addEventListener("click", function() { humanChoice = 'scissors';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,computerScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;})











let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
    console.log(computerChoice);
    return computerChoiceArray[computerChoice];
};









function playOneRound ( computerChoice, humanChoice) {

   
    
    //Deal with rock case,scissors case, and paper case

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


/*for(let i = 0; i < 5; i++) {

    console.log(playOneRound(getComputerChoice(),getHumanChoice()));  //Plays the game five rounds

}*/




/*console.log(`Computer score is: ${computerScore} & Human Score is ${humanScore} `)

if (computerScore > humanScore) {
    console.log('COMPUTER WON!');

} else if (computerScore < humanScore) {
    console.log('HUMAN WON!');

} else {
    console.log('YOU BOTH TIED!');
}*/

//create node list to listen for any clicks in button container
//have to loop through the list pparently






