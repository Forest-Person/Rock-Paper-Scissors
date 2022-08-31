//RockPaper scissors//


function getComputerChoice() {

    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);

    return console.log(computerChoiceArray[computerChoice]);
}
getComputerChoice();

document.write("This is a test");

let humanChoice = prompt("Do you choose rock paper or scissors?");

let computerScore = 0;

let humanScore = 0;


/*function whoWon(computerchoice,humanchoice) {
   
    if (computerchoice == 'rock' && humanchoice == 'rock') {
        return alert("It was tie")
    
    }else if (computerchoice == 'rock' && humanchoice == 'scissors')



}


alert(`Computer chose ${computerChoiceArray[computerChoice]} and you chose ${humanChoice}`)*/
