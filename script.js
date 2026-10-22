const eras = [
  {
    id: "jungle",
    name: "Prehistoric Jungle — 65 million years ago",
    clue: "Massive footprints. Dense jungle. Something nearby is breathing very loudly."
  },
  {
    id: "court",
    name: "The Royal Court — 1684",
    clue: "Silk, secrets, and a royal banquet where everyone seems to know everyone else."
  },
  {
    id: "neon",
    name: "Neon City — 2189",
    clue: "Robots control the doors, and the street markets only accept strange digital currency."
  },
  {
    id: "moon",
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

const resultCard = document.querySelector("#result-card");
const resultTitle = document.querySelector("#result-title");
const resultStory = document.querySelector("#result-story");
const stabilityScore = document.querySelector("#stability-score");
const badgeName = document.querySelector("#badge-name");
const playAgainButton = document.querySelector("#play-again-button");

let selectedItems = [];
let currentEra = null;
let journeyComplete = false;

function hasItem(itemName) {
  return selectedItems.includes(itemName);
}

function chooseEra() {
  const newEra = eras[Math.floor(Math.random() * eras.length)];

  currentEra = newEra;
  selectedItems = [];
  journeyComplete = false;

  eraName.textContent = currentEra.name;
  eraClue.textContent = currentEra.clue;
  gameMessage.textContent = "New destination selected. Pack exactly three items.";

  resultCard.hidden = true;
  rerollButton.disabled = false;

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
        aria-pressed="${isSelected}"
        ${journeyComplete ? "disabled" : ""}>
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

  travelButton.disabled = selectedItems.length !== 3 || journeyComplete;
}

function toggleItem(itemName) {
  if (journeyComplete) {
    return;
  }

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

function getJourneyResult() {
  if (currentEra.id === "jungle") {
    if (hasItem("Mirror")) {
      return {
        title: "Prehistoric Diplomat",
        story: "A hungry velociraptor sees its reflection in your mirror and becomes convinced it has found a rival. While it argues with itself, you quietly escape the jungle.",
        stability: "91%",
        badge: "Raptor Negotiator"
      };
    }

    if (hasItem("Flashlight") && hasItem("Rope")) {
      return {
        title: "Cave Explorer",
        story: "You follow the flashlight into a cave and use the rope to climb away from a very large set of footsteps. You return with an excellent story and all your limbs.",
        stability: "78%",
        badge: "Jurassic Survivor"
      };
    }

    return {
      title: "Historical Snack",
      story: "Your journey becomes an unexpected prehistoric picnic. Fortunately, a dinosaur is more interested in your Snack Box than in you.",
      stability: "52%",
      badge: "Dinosaur Lunch Guest"
    };
  }

  if (currentEra.id === "court") {
    if (hasItem("Fake Moustache") && hasItem("Mirror")) {
      return {
        title: "The Mysterious Adviser",
        story: "Your magnificent fake moustache earns you a place beside the royal advisers. The mirror helps you notice a coded message hidden inside a fan.",
        stability: "94%",
        badge: "Court Insider"
      };
    }

    if (hasItem("Blank Notebook")) {
      return {
        title: "Royal Historian",
        story: "You record every rumour from the banquet. Your notebook later becomes the most dramatic historical document of the century.",
        stability: "75%",
        badge: "Keeper of Gossip"
      };
    }

    return {
      title: "Uninvited Banquet Guest",
      story: "You arrive without an invitation, but your Snack Box wins over the palace chef. You leave with a crown-shaped biscuit and several secrets.",
      stability: "63%",
      badge: "Palace Snack Expert"
    };
  }

  if (currentEra.id === "neon") {
    if (hasItem("Solar Charger") && hasItem("Duct Tape")) {
      return {
        title: "Neon City Repair Hero",
        story: "You recharge a broken market robot, then repair its loose panel with duct tape. The robot pays you with enough digital currency for a ride home.",
        stability: "89%",
        badge: "Robot Mechanic"
      };
    }

    if (hasItem("Tiny Speaker")) {
      return {
        title: "Underground DJ",
        story: "Your tiny speaker starts playing at exactly the right moment. The robots mistake you for a famous retro musician and open every locked door.",
        stability: "80%",
        badge: "Synthwave Legend"
      };
    }

    return {
      title: "Accidental Street Artist",
      story: "Your unusual luggage is declared 'vintage art' by a passing drone. You are politely displayed in a gallery until the portal reopens.",
      stability: "60%",
      badge: "Future Exhibit"
    };
  }

  if (currentEra.id === "moon") {
    if (hasItem("Plant Seeds") && hasItem("Solar Charger")) {
      return {
        title: "Moon Garden Founder",
        story: "You restore power to the greenhouse and plant the first new seeds in years. The gardening robot proudly names a basil leaf after you.",
        stability: "96%",
        badge: "Lunar Botanist"
      };
    }

    if (hasItem("Duct Tape") && hasItem("Rope")) {
      return {
        title: "Moon Colony Fixer",
        story: "You repair a leaky oxygen pipe with duct tape and rope. It is not an official engineering method, but nobody complains while breathing normally again.",
        stability: "84%",
        badge: "Emergency Engineer"
      };
    }

    return {
      title: "Low-Gravity Tourist",
      story: "You spend most of the trip learning how not to float into the ceiling. The colony gives you a souvenir moon rock for trying your best.",
      stability: "66%",
      badge: "Space Visitor"
    };
  }
}

function beginJourney() {
  journeyComplete = true;

  const result = getJourneyResult();

  resultTitle.textContent = result.title;
  resultStory.textContent = result.story;
  stabilityScore.textContent = result.stability;
  badgeName.textContent = result.badge;

  gameMessage.textContent = "Journey complete. Your travel report is ready.";
  rerollButton.disabled = true;
  resultCard.hidden = false;

  renderGame();

  resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

itemsGrid.addEventListener("click", (event) => {
  const selectedButton = event.target.closest(".item-button");

  if (!selectedButton) {
    return;
  }

  toggleItem(selectedButton.dataset.item);
});

rerollButton.addEventListener("click", chooseEra);
travelButton.addEventListener("click", beginJourney);

playAgainButton.addEventListener("click", () => {
  chooseEra();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

chooseEra();