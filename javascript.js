//RockPaper scissors//
let humanChoice;

let computerChoice

let rock = document.querySelector(".rock");

let paper = document.querySelector(".paper");

let scissors = document.querySelector(".scissors");

let yourScore = document.querySelector(".yourScore");

let compScore = document.querySelector(".computerScore");

let scoreDiv = document.querySelector('.scoreDiv');

let playAgain = document.createElement('button');

playAgain.style.cssText = 'font-size:3rem;background-color:green;border:5px solid light-blue;'

playAgain.textContent = 'Play Again?';

const choiceShow = document.querySelector(".choiceShow")

let humanScore = 0;

let computerScore = 0;




rock.addEventListener("click",function() { humanChoice = 'rock';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,computerScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;

if(humanScore === 5 || computerScore === 5){

    if(humanScore >= 5) {

        yourScore.textContent = 'YOU WON!';
        compScore.textContent = '';
    
        }else if (computerScore >= 5) {
    
            compScore.textContent = 'COMPUTER WON!';
            yourScore.textContent = '';
        };

};
});

paper.addEventListener("click",function() { humanChoice = 'paper';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,computerScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;
if(humanScore === 5 || computerScore === 5){

    if(humanScore >= 5) {

        yourScore.textContent = 'YOU WON!';
        compScore.textContent = '';
    
        }else if (computerScore >= 5) {
    
            compScore.textContent = 'COMPUTER WON!';
            yourScore.textContent = '';
        };
    
};
});

scissors.addEventListener("click", function() { humanChoice = 'scissors';
playOneRound(getComputerChoice(),humanChoice);
console.log(humanScore,computerScore);
yourScore.textContent = `Your Score = ${humanScore}`;
compScore.textContent = `Computer's Score =  ${computerScore}`;
if(humanScore === 5 || computerScore === 5){
    
    if(humanScore >= 5) {

    yourScore.textContent = 'YOU WON!';
    compScore.textContent = '';


    }else if (computerScore >= 5) {

        compScore.textContent = 'COMPUTER WON!';
        yourScore.textContent = '';
        //need to add button that asks if you owuld like to play again
        //also note who wins each round, and also put scores back to zero if you choose to play again.
    };
    
};
});

rock.addEventListener('click', function() {


    if (yourScore.textContent == 'YOU WON!'){
    
        
        scoreDiv.insertBefore(playAgain, compScore );
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        paper.style.pointerEvents = 'none';
    
        
    }else if ( compScore.textContent == 'COMPUTER WON!') {
    
       
        scoreDiv.insertBefore(playAgain, compScore );
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        paper.style.pointerEvents = 'none';
    
    }
});


scissors.addEventListener('click', function() {


if (yourScore.textContent == 'YOU WON!'){

    
    scoreDiv.insertBefore(playAgain, compScore );
    scissors.style.pointerEvents = 'none';
    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';
    
}else if ( compScore.textContent == 'COMPUTER WON!') {

    
    scoreDiv.insertBefore(playAgain, compScore );
    scissors.style.pointerEvents = 'none';
    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';

}

});

paper.addEventListener('click', function() {


    if (yourScore.textContent == 'YOU WON!'){
    
       
        scoreDiv.insertBefore(playAgain, compScore );
        scissors.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        paper.style.pointerEvents = 'none';
        
    }else if ( compScore.textContent == 'COMPUTER WON!') {
    
        
        scoreDiv.insertBefore(playAgain, compScore );
        scissors.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        paper.style.pointerEvents = 'none';
    
    }
    
    });


    playAgain.addEventListener('click', function() {

        playAgain.remove()
        choiceShow.remove()
        scissors.style.pointerEvents = 'auto';
        rock.style.pointerEvents = 'auto';
        paper.style.pointerEvents = 'auto';
        computerScore = 0
        humanScore = 0
        yourScore.textContent = `Your Score = ${humanScore}`;
        compScore.textContent = `Computer's Score =  ${computerScore}`;
        

    });

/*/ To disable:    
document.getElementById('id').style.pointerEvents = 'none';
// To re-enable:
document.getElementById('id').style.pointerEvents = 'auto'; 
*/




function getComputerChoice() {

    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
    console.log(computerChoice);
    return computerChoiceArray[computerChoice];
};



function playOneRound ( computerChoice, humanChoice) {

   
    choiceShow.textContent = `You Chose ${humanChoice}  ------  Computer Chose ${computerChoice}`
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



