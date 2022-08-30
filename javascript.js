//RockPaper scissors//
let computerChoiceArray = ['rock','paper','scissors']

let computerChoice = Math.floor(Math.random()*computerChoiceArray.length)

console.log(computerChoice)

let humanChoice = prompt("Do you choose rock paper or scissors?")


function whoWon(computerChoice[computerChoiceArray],choice)


alert(`Computer chose ${computerChoiceArray[computerChoice]} and you chose ${humanChoice}`)
