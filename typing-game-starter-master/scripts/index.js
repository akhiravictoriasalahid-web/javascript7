// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// PART 1 addWordToDOM, updateScore, Add an event listener
function addWordToDOM() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];

  word.innerText = randomWord;
}
addWordToDOM();

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

// PART 2 updateTime function & gameOver function
function updateTime() {
  time--;
  timeEl.innerText = time;

  if (time === 0) {
    gameOver();
  }
}
setInterval(updateTime,1000);

function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your score is ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = "flex";
}

// PART 3 
let difficulty = "easy";

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
});

text.addEventListener("input", function(e) {
  const enteredText = e.target.value;

  if (enteredText === randomWord) {
    updateScore();
    addWordToDOM();

    if (difficulty === "easy") {
      time += 5;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 2;
    }

    timeEl.innerText = time;
    e.target.value = "";
  }
}); 

