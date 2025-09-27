const words = ["apple", "grape", "train", "chair", "light"]; 
const answer = words[Math.floor(Math.random() * words.length)];
const board = document.getElementById("game-board");
const input = document.getElementById("guess-input");
const button = document.getElementById("submit-btn");

let attempts = 0;

button.addEventListener("click", () => {
  const guess = input.value.toLowerCase();
  if (guess.length !== 5) {
    alert("Word must be 5 letters!");
    return;
  }

  attempts++;
  for (let i = 0; i < 5; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = guess[i];

    if (guess[i] === answer[i]) {
      tile.classList.add("correct");
    } else if (answer.includes(guess[i])) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }

    board.appendChild(tile);
  }

  input.value = "";

  if (guess === answer) {
    setTimeout(() => alert("🎉 You guessed it in " + attempts + " tries!"), 100);
  }
});
