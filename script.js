let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let you = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options =["rock","paper","scissor"];
    let opIdx = Math.floor(Math.random()*3);
    return options[opIdx];
}
const draw = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "transparent";
    msg.style.color="yellow";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.style.color="white";
        userScore++;
        you.innerText = userScore;
    }
    else{
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color="white";
        compScore++;
        comp.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);

    if(userChoice==compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false:true
        }
        else if(userChoice ==="paper"){
            //rock,scissor
            userWin= compChoice === "rock" ? true:false
        }
        else{
            //rock,paper
            userWin = compChoice ==="rock"? false:true
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});