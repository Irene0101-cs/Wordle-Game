const words = ["apple", "grape", "train", "chair", "light"];
const answer = words[Math.floor(Math.random() * words.length)];
const board = document.getElementById("game-board");
const message = document.getElementById("message");

let currentRow = 0;
let currentCol = 0;
let guesses = Array(6).fill().map(() => Array(5).fill(""));

function createBoard() {
  for (let r = 0; r < 6; r++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("id", `row-${r}-col-${c}`);
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}
createBoard();

document.addEventListener("keydown", (e) => {
  if (message.textContent.includes("🎉")) return; // stop after win
  if (currentRow >= 6) return;

  if (e.key === "Backspace" && currentCol > 0) {
    currentCol--;
    guesses[currentRow][currentCol] = "";
    document.getElementById(`row-${currentRow}-col-${currentCol}`).textContent = "";
  } else if (e.key === "Enter") {
    if (currentCol === 5) {
      checkGuess();
    } else {
      message.textContent = "Not enough letters!";
    }
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    if (currentCol < 5) {
      guesses[currentRow][currentCol] = e.key.toLowerCase();
      document.getElementById(`row-${currentRow}-col-${currentCol}`).textContent = e.key.toUpperCase();
      currentCol++;
    }
  }
});

function checkGuess() {
  const guess = guesses[currentRow].join("");
  if (guess.length !== 5) return;

  for (let i = 0; i < 5; i++) {
    const tile = document.getElementById(`row-${currentRow}-col-${i}`);
    if (guess[i] === answer[i]) {
      tile.classList.add("correct");
    } else if (answer.includes(guess[i])) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }
  }

  if (guess === answer) {
    message.textContent = `🎉 You guessed it in ${currentRow + 1} tries!`;
  } else {
    currentRow++;
    currentCol = 0;
    if (currentRow === 6) {
      message.textContent = `😢 Game over! The word was "${answer}".`;
    }
  }
}
