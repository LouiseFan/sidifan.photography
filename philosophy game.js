let Letters = "DAISY"
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = String(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "The answer inputed last time: ";
    }

    if (userGuess === Letters) {
        lastResult.textContent = "Congratulations ! You are right. The answer is DAISY.\n Daisy means merriness, happiness, peace and hope.\n I hope the collection you are about to see will make you feel this way - merriness, happiness, peace and hope.\n Cest La Vie.\n";
        lastResult.style.color = "orange";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        setGameOver();
    } else {
        lastResult.textContent = "Your answer is wrong, please input new anser again.";
        lastResult.style.color = "red"
      }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus(); 

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start a New Game"
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.color = "wihite";

    let Letters = "DAISY"
}


