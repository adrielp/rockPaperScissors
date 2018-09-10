const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const result_div = document.querySelector('.result');
let playerWin = "";
let computerWin = "";
let gameTie = ""; 

rockButton.addEventListener('click', () => {playRound('rock')});
paperButton.addEventListener('click', () => {playRound('paper')});
scissorsButton.addEventListener('click', () => {playRound('scissors')});

function computerPlay() {
    let value = Math.random();

    if (value < 0.34){
        return "rock";
    } else if (value > 0.34 && value < 0.67){
        return "paper";
    } else {
        return "scissors";
        }

    }
   


   function playRound(userInput) {

    const computerInput = computerPlay();

    if (userInput == computerInput) {
        gameTie++;
        result_div.innerHTML = 'It\'s draw!';
        //tie();
        //alert("You tied!"); 
    } else if (userInput == "rock" && computerInput == "paper") {
        computerWin++;
        compScore_span.innerHTML = computerWin;
        result_div.innerHTML = 'Paper covers rock. The computer wins!';
        //lose();
        //alert("The computer won this round!")
    } else if (userInput == "rock" &&  computerInput == "scissors"){ 
        playerWin++;
        userScore_span.innerHTML = playerWin; 
        result_div.innerHTML = 'Rock destroys scissors. You win!';
        //win();
        //alert("You won this round!");
    } else if (userInput == "paper" && computerInput == "rock") {
        playerWin++;
        userScore_span.innerHTML = playerWin; 
        result_div.innerHTML = 'Paper covers rock. You win!';
        //win();
        //alert ("You won this round!");
    } else if (userInput == "paper" && computerInput == "scissors"){
        computerWin++;
        compScore_span.innerHTML = computerWin;
        result_div.innerHTML = 'Scissors cuts paper. The computer wins!';
        //lose();
        //alert("The computer won this round!");
    } else if (userInput == "scissors" && computerInput == "rock"){
        computerWin++;
        compScore_span.innerHTML = computerWin;
        result_div.innerHTML = 'Rock destroys scissors. The computer wins!';
        //lose();
        //alert("The computer won this round!");
    } else {
        playerWin++;
        userScore_span.innerHTML = playerWin; 
        result_div.innerHTML = 'Scissors cuts paper. You win!';
        //win();
        //alert("You won this round!");
        }
    }

   
   



    