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

const arrivalEvents = {
  jungle: {
    title: "A velociraptor blocks the path",
    description: "It notices your suitcase. You have only a few seconds to decide what to do.",
    choices: [
      { id: "hide", label: "Hide in a cave" },
      { id: "distract", label: "Create a distraction" },
      { id: "offer", label: "Offer it a snack" }
    ]
  },
  court: {
    title: "The royal banquet begins",
    description: "A guard asks who invited you. Across the room, somebody drops a suspicious letter.",
    choices: [
      { id: "join", label: "Pretend to be an adviser" },
      { id: "investigate", label: "Read the letter" },
      { id: "kitchen", label: "Escape through the kitchen" }
    ]
  },
  neon: {
    title: "A market robot has stopped working",
    description: "The city gates are locked. A small robot sparks beside the only way out.",
    choices: [
      { id: "fix", label: "Try to repair the robot" },
      { id: "perform", label: "Distract the crowd" },
      { id: "explore", label: "Search for another exit" }
    ]
  },
  moon: {
    title: "The moon colony has an emergency",
    description: "The greenhouse is dark, while an oxygen pipe makes an alarming hissing sound.",
    choices: [
      { id: "garden", label: "Help the greenhouse" },
      { id: "repair", label: "Fix the oxygen pipe" },
      { id: "float", label: "Follow a floating object" }
    ]
  }
};

const eraName = document.querySelector("#era-name");
const eraClue = document.querySelector("#era-clue");
const itemsGrid = document.querySelector("#items-grid");
const suitcaseItems = document.querySelector("#suitcase-items");
const selectionCount = document.querySelector("#selection-count");
const gameMessage = document.querySelector("#game-message");
const travelButton = document.querySelector("#travel-button");
const rerollButton = document.querySelector("#reroll-button");

const arrivalCard = document.querySelector("#arrival-card");
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const choicesGrid = document.querySelector("#choices-grid");

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

  arrivalCard.hidden = true;
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

function showArrivalEvent() {
  journeyComplete = true;

  const event = arrivalEvents[currentEra.id];

  eventTitle.textContent = event.title;
  eventDescription.textContent = event.description;

  choicesGrid.innerHTML = event.choices.map((choice) => {
    return `
      <button class="choice-button" type="button" data-choice="${choice.id}">
        ${choice.label}
      </button>
    `;
  }).join("");

  gameMessage.textContent = "You have arrived. Choose carefully.";
  rerollButton.disabled = true;
  arrivalCard.hidden = false;
  resultCard.hidden = true;

  renderGame();

  arrivalCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function getJourneyResult(choice) {
  if (currentEra.id === "jungle") {
    if (choice === "distract" && hasItem("Mirror")) {
      return {
        title: "Prehistoric Diplomat",
        story: "The velociraptor sees its reflection and immediately starts arguing with it about who has better teeth. You leave quietly while it loses the debate to itself.",
        stability: "91%",
        badge: "Raptor Negotiator"
      };
    }

    if (choice === "hide" && hasItem("Flashlight") && hasItem("Rope")) {
      return {
        title: "Cave Explorer",
        story: "Your flashlight reveals a safe cave, and the rope gets you up a cliff. You also discover that prehistoric bats are somehow already judging your outfit.",
        stability: "78%",
        badge: "Jurassic Survivor"
      };
    }

    if (choice === "offer" && hasItem("Snack Box")) {
      return {
        title: "Dinosaur Dinner Host",
        story: "The velociraptor loves your snacks so much that it follows you around for dessert. You leave the past with a new pet and several bite marks on your travel insurance form.",
        stability: "83%",
        badge: "Prehistoric Food Critic"
      };
    }

    return {
      title: "Fern-Based Defence Strategy",
      story: "You hide behind a fern. Unfortunately, it is a very small fern. Fortunately, the dinosaur is briefly distracted by your extremely confusing suitcase.",
      stability: "52%",
      badge: "Fern Hider"
    };
  }

  if (currentEra.id === "court") {
    if (choice === "join" && hasItem("Fake Moustache") && hasItem("Mirror")) {
      return {
        title: "The Mysterious Adviser",
        story: "Your fake moustache is so impressive that the king asks it for political advice. By sunset, you have accidentally declared a national Moustache Appreciation Day.",
        stability: "94%",
        badge: "Court Insider"
      };
    }

    if (choice === "investigate" && hasItem("Blank Notebook")) {
      return {
        title: "Royal Historian",
        story: "You copy the secret letter and uncover a plot involving a missing crown, three geese, and a duke who is being dramatic on purpose.",
        stability: "85%",
        badge: "Keeper of Gossip"
      };
    }

    if (choice === "kitchen" && hasItem("Snack Box")) {
      return {
        title: "Palace Snack Expert",
        story: "The palace chef tries your snacks and declares them 'mysterious future spices'. You leave with a crown-shaped biscuit and a job offer you politely ignore.",
        stability: "74%",
        badge: "Banquet Escapee"
      };
    }

    return {
      title: "Uninvited Banquet Guest",
      story: "A guard mistakes your suitcase for a fashionable hat. You escape the palace just before someone asks you to model it for a portrait.",
      stability: "61%",
      badge: "Royal Confusion"
    };
  }

  if (currentEra.id === "neon") {
    if (choice === "fix" && hasItem("Solar Charger") && hasItem("Duct Tape")) {
      return {
        title: "Neon City Repair Hero",
        story: "You recharge the robot and repair it with duct tape. It calls this 'ancient human engineering' and gives you a five-star review in robot language.",
        stability: "89%",
        badge: "Robot Mechanic"
      };
    }

    if (choice === "perform" && hasItem("Tiny Speaker")) {
      return {
        title: "Underground DJ",
        story: "Your tiny speaker plays one retro song. Within minutes, every robot is dancing badly and the city gates open out of pure embarrassment.",
        stability: "80%",
        badge: "Synthwave Legend"
      };
    }

    if (choice === "explore" && hasItem("Flashlight")) {
      return {
        title: "Tunnel Pathfinder",
        story: "Your flashlight reveals a secret tunnel. It leads to a futuristic laundry room, but luckily one machine gives you a free neon sticker.",
        stability: "76%",
        badge: "City Pathfinder"
      };
    }

    return {
      title: "Accidental Street Art",
      story: "A drone declares your luggage 'vintage art' and places you in a gallery. Visitors spend hours discussing what your confused expression represents.",
      stability: "60%",
      badge: "Future Exhibit"
    };
  }

  if (currentEra.id === "moon") {
    if (choice === "garden" && hasItem("Plant Seeds") && hasItem("Solar Charger")) {
      return {
        title: "Moon Garden Founder",
        story: "You restore power to the greenhouse and plant the first new seeds in years. The robot names a basil leaf after you, which is sweet but impossible to frame.",
        stability: "96%",
        badge: "Lunar Botanist"
      };
    }

    if (choice === "repair" && hasItem("Duct Tape") && hasItem("Rope")) {
      return {
        title: "Moon Colony Fixer",
        story: "You repair the oxygen pipe with duct tape and rope. The official manual is immediately updated with a new chapter titled: 'Honestly, This Works.'",
        stability: "84%",
        badge: "Emergency Engineer"
      };
    }

    if (choice === "float" && hasItem("Rubber Duck")) {
      return {
        title: "Zero-Gravity Duck Detective",
        story: "You follow a floating rubber duck to a lost supply pod. The colony celebrates by making the duck honorary mayor for exactly seven minutes.",
        stability: "81%",
        badge: "Space Detective"
      };
    }

    return {
      title: "Low-Gravity Tourist",
      story: "You spend most of the trip learning not to float into the ceiling. The colony gives you a moon rock and a polite reminder to stop apologising to furniture.",
      stability: "66%",
      badge: "Space Visitor"
    };
  }
}

function finishJourney(choice) {
  const result = getJourneyResult(choice);

  resultTitle.textContent = result.title;
  resultStory.textContent = result.story;
  stabilityScore.textContent = result.stability;
  badgeName.textContent = result.badge;

  arrivalCard.hidden = true;
  resultCard.hidden = false;
  gameMessage.textContent = "Journey complete. Your travel report is ready.";

  resultCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

itemsGrid.addEventListener("click", (event) => {
  const selectedButton = event.target.closest(".item-button");

  if (!selectedButton) {
    return;
  }

  toggleItem(selectedButton.dataset.item);
});

choicesGrid.addEventListener("click", (event) => {
  const choiceButton = event.target.closest(".choice-button");

  if (!choiceButton) {
    return;
  }

  finishJourney(choiceButton.dataset.choice);
});

rerollButton.addEventListener("click", chooseEra);
travelButton.addEventListener("click", showArrivalEvent);

playAgainButton.addEventListener("click", () => {
  chooseEra();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

chooseEra();