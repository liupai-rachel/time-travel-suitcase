const eras = [
  {
    name: "Prehistoric Jungle — 65 million years ago",
    clue: "Massive footprints. Dense jungle. Something nearby is breathing very loudly."
  },
  {
    name: "The Royal Court — 1684",
    clue: "Silk, secrets, and a royal banquet where everyone seems to know everyone else."
  },
  {
    name: "Neon City — 2189",
    clue: "Robots control the doors, and the street markets only accept strange digital currency."
  },
  {
    name: "Moon Colony — 2247",
    clue: "Low gravity, limited oxygen, and a gardening robot has gone on strike."
  }
];

const items = [
  { name: "Flashlight", icon: "🔦" },
  { name: "Duct Tape", icon: "🩹" },
  { name: "Solar Charger", icon: "☀️" },
  { name: "Blank Notebook", icon: "📓" },
  { name: "Mirror", icon: "🪞" },
  { name: "Plant Seeds", icon: "🌱" },
  { name: "Rubber Duck", icon: "🦆" },
  { name: "Fake Moustache", icon: "🥸" },
  { name: "Snack Box", icon: "🍪" },
  { name: "Mystery Key", icon: "🗝️" },
  { name: "Tiny Speaker", icon: "🔊" },
  { name: "Rope", icon: "🪢" }
];

const eraName = document.querySelector("#era-name");
const eraClue = document.querySelector("#era-clue");
const itemsGrid = document.querySelector("#items-grid");
const suitcaseItems = document.querySelector("#suitcase-items");
const selectionCount = document.querySelector("#selection-count");
const gameMessage = document.querySelector("#game-message");
const travelButton = document.querySelector("#travel-button");
const rerollButton = document.querySelector("#reroll-button");

let selectedItems = [];
let currentEra = null;

function chooseEra() {
  const newEra = eras[Math.floor(Math.random() * eras.length)];

  currentEra = newEra;
  selectedItems = [];

  eraName.textContent = currentEra.name;
  eraClue.textContent = currentEra.clue;
  gameMessage.textContent = "New destination selected. Pack exactly three items.";
  renderGame();
}

function renderGame() {
  selectionCount.textContent = `${selectedItems.length} / 3 selected`;

  itemsGrid.innerHTML = items.map((item) => {
    const isSelected = selectedItems.includes(item.name);

    return `
      <button class="item-button ${isSelected ? "selected" : ""}"
        type="button"
        data-item="${item.name}"
        aria-pressed="${isSelected}">
        <span class="item-icon">${item.icon}</span>
        <span class="item-name">${item.name}</span>
      </button>
    `;
  }).join("");

  if (selectedItems.length === 0) {
    suitcaseItems.innerHTML = `<p class="empty-suitcase">Your suitcase is empty.</p>`;
  } else {
    suitcaseItems.innerHTML = selectedItems.map((itemName) => {
      return `<p class="suitcase-tag">${itemName}</p>`;
    }).join("");
  }

  travelButton.disabled = selectedItems.length !== 3;
}

function toggleItem(itemName) {
  if (selectedItems.includes(itemName)) {
    selectedItems = selectedItems.filter((item) => item !== itemName);
    gameMessage.textContent = `${itemName} removed from your suitcase.`;
  } else if (selectedItems.length === 3) {
    gameMessage.textContent = "Your suitcase is full. Remove an item before adding another.";
  } else {
    selectedItems.push(itemName);
    gameMessage.textContent = `${itemName} added to your suitcase.`;
  }

  renderGame();
}

itemsGrid.addEventListener("click", (event) => {
  const selectedButton = event.target.closest(".item-button");

  if (!selectedButton) {
    return;
  }

  toggleItem(selectedButton.dataset.item);
});

rerollButton.addEventListener("click", chooseEra);

travelButton.addEventListener("click", () => {
  gameMessage.textContent = "Suitcase approved. The time portal is opening...";
});

chooseEra();