const emojis = [
  "💻",
  "💻",
  "👋",
  "👋",
  "🙌",
  "🙌",
  "🚀",
  "🚀",
  "📱",
  "📱",
  "✔️",
  "✔️",
  "👻",
  "👻",
  "🤖",
  "🤖",
];

let matchedCards = 0;
let moves = 0;
let timer;

const gameBoard = document.querySelector(".game");
const movesCounter = document.querySelector(".moves");
const timerCounter = document.querySelector(".timer");

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function mixCards() {
  shuffleEmojis = shuffleCards(emojis);
  for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    gameBoard.appendChild(box);
  }
}

function startTimer() {
  let timeLeft = 10;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerCounter.textContent = timeLeft;
    } else {
      clearInterval(timer);
      showModal(matchedCards === emojis.length / 2 ? "Você ganhou!" : "Você perdeu!");
    }
  }, 1000);
}

function showModal(message) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${message}</h2>
      <button class="btn-restart">Jogar novamente</button>
    </div>
  `;
  document.body.appendChild(modal);
  const restartButton = modal.querySelector(".btn-restart");
  restartButton.addEventListener("click", () => {
    modal.remove();
    const emojis = [
  "💻",
  "💻",
  "👋",
  "👋",
  "🙌",
  "🙌",
  "🚀",
  "🚀",
  "📱",
  "📱",
  "✔️",
  "✔️",
  "👻",
  "👻",
  "🤖",
  "🤖",
];

let matchedCards = 0;
let moves = 0;
let timer;

const gameBoard = document.querySelector(".game");
const movesCounter = document.querySelector(".moves");
const timerCounter = document.querySelector(".timer");

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function mixCards() {
  shuffleEmojis = shuffleCards(emojis);
  for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    gameBoard.appendChild(box);
  }
}

function startTimer() {
  let timeLeft = 10;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerCounter.textContent = timeLeft;
    } else {
      clearInterval(timer);
      showModal(matchedCards === emojis.length / 2 ? "Você ganhou!" : "Você perdeu!");
    }
  }, 1000);
}

function showModal(message) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${message}</h2>
      <button class="btn-restart">Jogar novamente</button>
    </div>
  `;
  document.body.appendChild(modal);
  const restartButton = modal.querySelector(".btn-restart");
  restartButton.addEventListener("click", () => {
    modal.remove();
    restartGame();
  });
}

let openCards = [];
let canClick = true;

function restartGame() {
  openCards = [];
  matchedCards = 0;
  moves = 0;
  movesCounter.textContent = moves;
  timerCounter.textContent = 60;
  gameBoard.innerHTML = "";
  mixCards();
  startTimer();
}

function handleClick() {
  if (!canClick || this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
    return;
  }

  this.classList.add("boxOpen");
  openCards.push(this);

  if (openCards.length === 2) {
    canClick = false;
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    matchedCards++;
    if (matchedCards === emojis.length / 2) {
      clearInterval(timer);
      showModal("Você ganhou!");
    }
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];
  canClick = true;
  moves++;
  movesCounter.textContent = moves;
}

mixCards();
window.location.reload();
  });
}

let openCards = [];
let canClick = true;

function restartGame() {
  openCards = [];
  matchedCards = 0;
  moves = 0;
  movesCounter.textContent = moves;
  timerCounter.textContent = 60;
  gameBoard.innerHTML = "";
  mixCards();
  startTimer();
}

function handleClick() {
  if (!canClick || this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
    return;
  }

  this.classList.add("boxOpen");
  openCards.push(this);

  if (openCards.length === 2) {
    canClick = false;
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    matchedCards++;
    if (matchedCards === emojis.length / 2) {
      clearInterval(timer);
      showModal("Você ganhou!");
    }
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];
  canClick = true;
  moves++;
  movesCounter.textContent = moves;
}

mixCards();
startTimer();