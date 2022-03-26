// fungsi dari pilihan komputer
function getComChoice() {
    const comChoice = Math.floor(Math.random() * 3);
    if (comChoice === 0) return "rock";
    if (comChoice === 1) return "paper";
    if (comChoice === 2) return "scissors";
}

// fungsi dari peraturan dan hasil permin permianan
function getResult() {
    if (comChoice === playerChoice) return "Draw Game";
    if (comChoice === "rock" && playerChoice === "paper") return "You Win";
    if (comChoice === "rock" && playerChoice === "scissors") return "You Lost";
    if (comChoice === "paper" && playerChoice === "scissors") return "You Win";
    if (comChoice === "paper" && playerChoice === "rock") return "You Lost";
    if (comChoice === "scissors" && playerChoice === "rock") return "You Win";
    if (comChoice === "scissors" && playerChoice === "paper") return "You Lost";
}

// fungsi dari pilihan player
const playerRock = document.querySelector(".player-rock");
playerRock.addEventListener("click", function () {
    const comChoice = getComChoice();
    const playerChoice = playerRock.className;
    const result = getResult(getComChoice, playerChoice);
});

const playerPaper = document.querySelector(".player-paper");
playerPaper.addEventListener("click", function () {
    const comChoice = getComChoice();
    const playerChoice = playerPaper.className;
    const result = getResult(getComChoice, playerChoice);
});

const playerScissors = document.querySelector(".player-scissors");
playerScissors.addEventListener("click", function () {
    const comChoice = getComChoice();
    const playerChoice = playerScissors.className;
    const result = getResult(getComChoice, playerChoice);
});

// fungsi dari display hasil permianan
function getDisplay() {}

// fungsi dari tombol refresh
function refresh() {
    window.location.reload("Refresh");
}
