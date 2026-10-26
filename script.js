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
const outcomeEffect = document.querySelector("#outcome-effect");

let selectedItems = [];
let currentEra = null;
let journeyComplete = false;

function hasItem(itemName) {
  return selectedItems.includes(itemName);
}

function hasAllItems(itemNames) {
  return itemNames.every((itemName) => hasItem(itemName));
}

function makeResult(title, explanation, story, stability, badge) {
  return {
    title,
    explanation,
    story,
    stability,
    badge
  };
}

function chooseEra() {
  currentEra = eras[Math.floor(Math.random() * eras.length)];
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
    suitcaseItems.innerHTML = "<p class=\"empty-suitcase\">Your suitcase is empty.</p>";
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
    if (choice === "hide") {
      if (hasAllItems(["Flashlight", "Rope"])) {
        return makeResult(
          "Cave Explorer",
          "You chose to hide in the cave, and you packed both a Flashlight and Rope. The flashlight found a safe route, while the rope helped you climb to safety.",
          "You escape the velociraptor, although several prehistoric bats stare at you as if your outfit is a personal insult.",
          "78%",
          "Jurassic Survivor"
        );
      }

      return makeResult(
        "Lost in the Cave",
        "You chose to hide in the cave, but you did not pack both a Flashlight and Rope. You could not see the path or climb out.",
        "You spend three hours following a glowworm that turns out to be going nowhere. The dinosaur eventually gives up and leaves.",
        "48%",
        "Professional Cave Confuser"
      );
    }

    if (choice === "distract") {
      if (hasItem("Mirror")) {
        return makeResult(
          "Prehistoric Diplomat",
          "You chose to create a distraction, and you packed a Mirror. The velociraptor mistakes its reflection for a rival.",
          "It starts arguing with itself about who has better teeth. You leave quietly while it loses the debate to itself.",
          "91%",
          "Raptor Negotiator"
        );
      }

      return makeResult(
        "Accidental Dinosaur Dance Instructor",
        "You chose to create a distraction, but you did not pack a Mirror. Your only available distraction was your own strange dance.",
        "The velociraptor copies every move. Unfortunately, it is better at dancing than you are.",
        "54%",
        "Jurassic Choreographer"
      );
    }

    if (choice === "offer") {
      if (hasItem("Snack Box")) {
        return makeResult(
          "Dinosaur Dinner Host",
          "You chose to offer a snack, and you packed a Snack Box. The velociraptor accepts your peace offering.",
          "It follows you around for dessert. You return with a new pet dinosaur and a ruined travel insurance form.",
          "83%",
          "Prehistoric Food Critic"
        );
      }

      return makeResult(
        "The Dinosaur Orders You Instead",
        "You chose to offer a snack, but you did not pack a Snack Box. The velociraptor waits politely for food that does not exist.",
        "After an awkward pause, you offer it a Mystery Key. It looks offended, but you survive the embarrassment.",
        "45%",
        "Terrible Host"
      );
    }
  }

  if (currentEra.id === "court") {
    if (choice === "join") {
      if (hasAllItems(["Fake Moustache", "Mirror"])) {
        return makeResult(
          "The Mysterious Adviser",
          "You chose to pretend to be an adviser, and you packed a Fake Moustache and Mirror. Your disguise is surprisingly convincing.",
          "The king asks your moustache for political advice. By sunset, you have accidentally created National Moustache Appreciation Day.",
          "94%",
          "Court Insider"
        );
      }

      return makeResult(
        "Suspicious Moustache",
        "You chose to pretend to be an adviser, but your disguise was incomplete. The guard notices immediately.",
        "You explain that you are a very important person from the future. The guard writes this down under 'probably nonsense.'",
        "49%",
        "Palace Suspect"
      );
    }

    if (choice === "investigate") {
      if (hasItem("Blank Notebook")) {
        return makeResult(
          "Royal Historian",
          "You chose to investigate the letter, and you packed a Blank Notebook. You record every detail before the letter disappears.",
          "You uncover a plot involving a missing crown, three geese, and a duke who is being dramatic on purpose.",
          "85%",
          "Keeper of Gossip"
        );
      }

      return makeResult(
        "Secret Letter Origami",
        "You chose to investigate the letter, but you did not pack a notebook. You try to memorise it.",
        "You remember only the words 'crown,' 'goose,' and 'soup.' The court later calls this a very unhelpful report.",
        "51%",
        "Forgetful Spy"
      );
    }

    if (choice === "kitchen") {
      if (hasItem("Snack Box")) {
        return makeResult(
          "Palace Snack Expert",
          "You chose the kitchen escape route, and you packed a Snack Box. The cooks approve of your mysterious future snacks.",
          "They call them 'future spices' and offer you a job. You leave with a crown-shaped biscuit and several rumours.",
          "74%",
          "Banquet Escapee"
        );
      }

      return makeResult(
        "Royal Dishwasher",
        "You chose the kitchen escape route, but you had no food to impress the cooks.",
        "They assume you are there to wash dishes. You escape only after cleaning a saucepan the size of a bathtub.",
        "46%",
        "Palace Dishwasher"
      );
    }
  }

  if (currentEra.id === "neon") {
    if (choice === "fix") {
      if (hasAllItems(["Solar Charger", "Duct Tape"])) {
        return makeResult(
          "Neon City Repair Hero",
          "You chose to repair the robot, and you packed a Solar Charger and Duct Tape. Together, they provide power and an emergency repair.",
          "The robot calls this 'ancient human engineering' and gives you a five-star review in robot language.",
          "89%",
          "Robot Mechanic"
        );
      }

      return makeResult(
        "Robot Error 404",
        "You chose to repair the robot, but you lacked either power or repair materials.",
        "The robot restarts and loudly announces that you are now its unpaid technical support assistant.",
        "50%",
        "Future Help Desk"
      );
    }

    if (choice === "perform") {
      if (hasItem("Tiny Speaker")) {
        return makeResult(
          "Underground DJ",
          "You chose to distract the crowd, and you packed a Tiny Speaker. The music gives everyone something else to watch.",
          "Every robot starts dancing badly, and the city gates open out of pure embarrassment.",
          "80%",
          "Synthwave Legend"
        );
      }

      return makeResult(
        "Silent Disco Disaster",
        "You chose to distract the crowd, but you did not pack the Tiny Speaker.",
        "You perform an energetic silent dance. The crowd is distracted, mainly because nobody understands what is happening.",
        "55%",
        "Confusing Performer"
      );
    }

    if (choice === "explore") {
      if (hasItem("Flashlight")) {
        return makeResult(
          "Tunnel Pathfinder",
          "You chose to search for another exit, and you packed a Flashlight. It reveals a hidden maintenance tunnel.",
          "The tunnel leads to a futuristic laundry room, but one machine gives you a free neon sticker.",
          "76%",
          "City Pathfinder"
        );
      }

      return makeResult(
        "Laundry Portal",
        "You chose to explore, but you did not pack a Flashlight. You enter the first dark tunnel you find.",
        "You emerge in a laundry room and accidentally become part of a robot's sock-sorting experiment.",
        "47%",
        "Lost Sock Assistant"
      );
    }
  }

  if (currentEra.id === "moon") {
    if (choice === "garden") {
      if (hasAllItems(["Plant Seeds", "Solar Charger"])) {
        return makeResult(
          "Moon Garden Founder",
          "You chose to help the greenhouse, and you packed Plant Seeds and a Solar Charger. You restore power and give the garden something new to grow.",
          "The robot names a basil leaf after you, which is sweet but impossible to frame.",
          "96%",
          "Lunar Botanist"
        );
      }

      return makeResult(
        "Accidental Moon Mud",
        "You chose to help the greenhouse, but you lacked either seeds or solar power.",
        "You water an empty pot for twenty minutes before realising the gardening robot is quietly judging you.",
        "52%",
        "Space Gardener Trainee"
      );
    }

    if (choice === "repair") {
      if (hasAllItems(["Duct Tape", "Rope"])) {
        return makeResult(
          "Moon Colony Fixer",
          "You chose to fix the oxygen pipe, and you packed Duct Tape and Rope. The emergency repair holds the pipe together.",
          "The official manual gains a new chapter titled: 'Honestly, This Works.'",
          "84%",
          "Emergency Engineer"
        );
      }

      return makeResult(
        "Oxygen Pipe Panic",
        "You chose to repair the pipe, but you lacked either Duct Tape or Rope.",
        "You try holding the pipe together with your hands. This works for six seconds and earns applause from absolutely nobody.",
        "44%",
        "Very Temporary Engineer"
      );
    }

    if (choice === "float") {
      if (hasItem("Rubber Duck")) {
        return makeResult(
          "Zero-Gravity Duck Detective",
          "You chose to follow the floating object, and you packed a Rubber Duck. It helps you recognise another duck-shaped object drifting ahead.",
          "It leads to a lost supply pod. The colony makes your duck honorary mayor for seven minutes.",
          "81%",
          "Space Detective"
        );
      }

      return makeResult(
        "Ceiling Resident",
        "You chose to follow the floating object, but you had no Rubber Duck to compare it with.",
        "It was a floating mop. You follow it into a ceiling vent and must be rescued by a very tired robot.",
        "53%",
        "Low-Gravity Tourist"
      );
    }
  }
}

function finishJourney(choice) {
  const result = getJourneyResult(choice);
  const stabilityNumber = Number(result.stability.replace("%", ""));
  const isGoodOutcome = stabilityNumber >= 75;

  resultTitle.textContent = result.title;
  resultStory.innerHTML = `
    <strong>Why this happened:</strong> ${result.explanation}
    <br><br>
    ${result.story}
  `;
  stabilityScore.textContent = result.stability;
  badgeName.textContent = result.badge;

  resultCard.classList.remove("good-outcome", "bad-outcome");
  outcomeEffect.innerHTML = "";

  if (isGoodOutcome) {
    resultCard.classList.add("good-outcome");

    const colours = ["#79f2d0", "#ff83c8", "#f7f4ff", "#ffd166"];

    for (let i = 0; i < 36; i += 1) {
      const confetti = document.createElement("span");

      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.background = colours[i % colours.length];
      confetti.style.animationDelay = `${Math.random() * 0.8}s`;

      outcomeEffect.appendChild(confetti);
    }
  } else {
    resultCard.classList.add("bad-outcome");

    for (let i = 0; i < 10; i += 1) {
      const warning = document.createElement("span");

      warning.className = "warning-symbol";
      warning.textContent = "⚠";
      warning.style.left = `${8 + Math.random() * 84}%`;
      warning.style.animationDelay = `${Math.random() * 0.5}s`;

      outcomeEffect.appendChild(warning);
    }
  }

  arrivalCard.hidden = true;
  resultCard.hidden = false;

  gameMessage.textContent = isGoodOutcome
    ? "Excellent time travel. History is mostly safe."
    : "A chaotic journey, but at least you returned.";

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