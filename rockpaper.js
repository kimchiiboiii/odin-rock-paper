

let choice = prompt("Enter \"rock\" \"paper\" or \"scissors\"")

playGame(playerChoice(choice), getComputerChoice());

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= 30 && randomNum > 0) {
        return "rock";
    } else if (randomNum > 30 && randomNum < 60) {
        return "paper";

    } else {
        return "scissors";
    }
}
function playerChoice(value) {
    let userInput = value.toLowerCase()
    console.log(userInput)

    if (userInput == "rock") {
        return "rock"

    } else if (userInput == "paper") {
        return "paper"

    } else if (userInput == "scissors") {
        return "scissors"
    
    } else {
        throw "Please input just the word spelled correctly, with no punctuation or special characters."
    }
}

function playGame(player, bot) {

    if (player == "rock" && bot == "rock" || player == "paper" && bot == "paper" || player == "scissors" && bot == "scissors") {
        return "Try again!";
    } else if (player == "rock" && bot == "scissors" || player == "paper" && bot == "rock"
                || player == "scissors" && bot == "paper") {
        console.log("Congratulations! You won!")

    } else {
        console.log("You lost!")

    }

}






