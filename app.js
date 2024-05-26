let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let myScore = document.querySelectorAll(".score");
let res = document.getElementById("msg");
let us = document.getElementById("user-score");
let cs = document.getElementById("comp-score");
const genRanChoices = () =>{
    const arr = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return arr[ranIdx];
}

const playGame = (userChoice) =>{
console.log("user choice",userChoice);
//genarate comp choice
const compChoice = genRanChoices();
console.log("cmp choice",compChoice);

if(userChoice === compChoice){
    console.log("draw");
   msg.innerText = "draw";
   msg.style.color = "yellow";
   
    }
    else{
       let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
    
    
}
const showWinner = (userWin) =>{
if(userWin){
        userScore++;
        msg.innerText = "you win";
        msg.style.color = "rgb(0,253,0)";
    }
    else{
        compScore++;
        msg.innerText = "comp wins";
        msg.style.color = "red";
    }
    us.innerText = userScore;
    cs.innerText = compScore;
}
choices.forEach((choice) => {
    
choice.addEventListener("click",() => {
const userChoice = choice.getAttribute("id");
playGame(userChoice);

});
});