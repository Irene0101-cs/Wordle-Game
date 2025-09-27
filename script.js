const words = ["apple", "grape", "train", "chair", "light", "table", "house", "river", "cloud", "grass", "phone", "music", "watch", "bread", "stone", "beach", "fruit", "money", "movie", "paint", "wrist", "spark", "metal", "glass", "party", "smile", "dance", "knife", "shoes", "shelf", "cable", "piano", "candy", "clock", "crown", "field", "drink", "sugar", "pearl", "ocean", "bench", "route", "floor", "couch", "crate", "grill", "flame", "angel", "bloom", "ghost", "glove", "brick", "beard", "shiny", "happy", "tiger", "eagle", "lemon", "mango", "berry", "melon", "royal", "pilot", "stage", "quest", "young", "sweet", "spice", "brush", "fence", "label", "topic", "queen", "minor", "major", "urban", "rural", "vivid", "coral", "ivory", "onion", "solid", "vowel", "stare", "bring", "chant", "drift", "eager", "fable", "gamer", "hobby", "image", "jelly", "karma", "laser", "moral", "naive", "opera", "pride", "quake", "rumor", "siren", "toast", "uncle", "vague", "waltz", "yield", "zebra", "align", "blend", "climb", "dwell", "embed", "forge", "grind", "hinge", "inbox", "jaunt", "kneel", "lodge", "mimic", "niche", "optic", "prism", "reign", "saucy", "tidal", "usher", "valor", "whale", "xenon", "yacht", "zesty", "acorn", "basil", "cedar", "depot", "ember", "fjord", "gloom", "hazel", "irony", "jolly", "koala", "lumen", "noble", "orbit", "polar", "quirk", "rally", "salty", "terra", "uncut", "vinyl", "wedge", "youth", "zonal", "acerb", "brave", "champ", "delta", "evoke", "frost", "grove", "harpy", "issue", "jumpy", "knead", "lanky", "mason", "naval", "orang", "plume", "quilt", "radar", "stamp", "throb", "utile", "vigor", "woven", "xylem", "yearn", "zooms", "adore", "brisk", "crane", "daisy", "ether", "flute", "haven", "icing", "jumbo", "linen", "motto", "nanny", "oasis", "raven", "spool", "tardy", "witty", "xenic", "zippy"]; 
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
