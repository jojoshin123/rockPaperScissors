const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return options[~~(Math.random() * options.length)];
}

function playGame(cpuInput, userInput) {
    const formatInput = userInput.charAt(0).toUpperCase() + userInput.toLowerCase().slice(1);
    displayResults(cpuInput, userInput);
    if ((formatInput === "Rock" && cpuInput === "Scissors") ||
        (formatInput === "Scissors" && cpuInput === "Paper") ||
        (formatInput === "Paper" && cpuInput === "Rock")) {
        return `You win! ${formatInput} beats ${cpuInput}.`;
    } else if ((formatInput === "Rock" && cpuInput === "Paper") ||
        (formatInput === "Scissors" && cpuInput === "Rock") ||
        (formatInput === "Paper" && cpuInput === "Scissors")) {
        return `You lose! ${formatInput} loses to ${cpuInput}.`;
    } else {
        return "It's a tie!";
    }
}

function displayResults(cpuInput, userInput) {
    document.getElementById("user-result").src = `${userInput}.png`
    document.getElementById("cpu-result").src = `${cpuInput}.png`
}

let buttons = document.querySelectorAll("img");

buttons.forEach((img) => {
    img.addEventListener("click", () => {
        const name = img.alt;
        playGame(computerPlay(), name)
    })
});