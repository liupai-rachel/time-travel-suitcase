const destinations = [
  {
    id: "jungle",
    name: "Prehistoric Jungle — 65 million years ago",
    clue: "Massive footprints. Dense jungle. Something nearby is breathing very loudly.",
    tip: "Temporal tip: Something reflective could cause a very large argument.",
    eventTitle: "A velociraptor blocks the path",
    eventDescription: "It notices your suitcase. You have only a few seconds to decide what to do.",
    choices: [
      {
        id: "hide",
        label: "Hide in a cave",
        required: ["Flashlight", "Rope"],
        success: {
          title: "Cave Explorer",
          story: "Your flashlight reveals a safe route and the rope gets you up a cliff. Several prehistoric bats still judge your outfit.",
          stability: "78%",
          badge: "Jurassic Survivor"
        },
        failure: {
          title: "Lost in the Cave",
          story: "You follow a glowworm for three hours before realising it is also lost. The dinosaur eventually gets bored and leaves.",
          stability: "48%",
          badge: "Professional Cave Confuser"
        }
      },
      {
        id: "distract",
        label: "Create a distraction",
        required: ["Mirror"],
        success: {
          title: "Prehistoric Diplomat",
          story: "The velociraptor sees its reflection and starts arguing with it about who has better teeth. You leave while it loses the debate to itself.",
          stability: "91%",
          badge: "Raptor Negotiator"
        },
        failure: {
          title: "Dinosaur Dance Instructor",
          story: "Without a mirror, your only distraction is an awkward dance. The velociraptor copies you and is somehow much better.",
          stability: "54%",
          badge: "Jurassic Choreographer"
        }
      },
      {
        id: "offer",
        label: "Offer it a snack",
        required: ["Snack Box"],
        success: {
          title: "Dinosaur Dinner Host",
          story: "The velociraptor loves your snacks and follows you around for dessert. You return with a new pet and a ruined insurance form.",
          stability: "83%",
          badge: "Prehistoric Food Critic"
        },
        failure: {
          title: "The Dinosaur Orders You Instead",
          story: "You offer food but have no Snack Box. After an awkward pause, the dinosaur looks offended and you offer it a Mystery Key.",
          stability: "45%",
          badge: "Terrible Host"
        }
      }
    ]
  },
  {
    id: "court",
    name: "The Royal Court — 1684",
    clue: "Silk, secrets, and a royal banquet where everyone seems to know everyone else.",
    tip: "Temporal tip: Looking official is often more useful than actually being official.",
    eventTitle: "The royal banquet begins",
    eventDescription: "A guard asks who invited you. Across the room, somebody drops a suspicious letter.",
    choices: [
      {
        id: "join",
        label: "Pretend to be an adviser",
        required: ["Fake Moustache", "Mirror"],
        success: {
          title: "The Mysterious Adviser",
          story: "Your disguise works so well that the king asks your moustache for political advice. You accidentally create National Moustache Appreciation Day.",
          stability: "94%",
          badge: "Court Insider"
        },
        failure: {
          title: "Suspicious Moustache",
          story: "The guard notices that you do not look important enough. They write your future-travel explanation under 'probably nonsense.'",
          stability: "49%",
          badge: "Palace Suspect"
        }
      },
      {
        id: "investigate",
        label: "Read the letter",
        required: ["Blank Notebook"],
        success: {
          title: "Royal Historian",
          story: "You record the evidence and uncover a plot involving a missing crown, three geese, and a duke being dramatic on purpose.",
          stability: "85%",
          badge: "Keeper of Gossip"
        },
        failure: {
          title: "Secret Letter Origami",
          story: "Without a notebook, you memorise only the words 'crown,' 'goose,' and 'soup.' The court finds your report unhelpful.",
          stability: "51%",
          badge: "Forgetful Spy"
        }
      },
      {
        id: "kitchen",
        label: "Escape through the kitchen",
        required: ["Snack Box"],
        success: {
          title: "Palace Snack Expert",
          story: "The cooks call your snacks 'mysterious future spices'. You escape with a crown-shaped biscuit and several useful rumours.",
          stability: "74%",
          badge: "Banquet Escapee"
        },
        failure: {
          title: "Royal Dishwasher",
          story: "You have no snacks to impress the cooks, so they assume you work there. You escape after washing a saucepan the size of a bathtub.",
          stability: "46%",
          badge: "Palace Dishwasher"
        }
      }
    ]
  },
  {
    id: "neon",
    name: "Neon City — 2189",
    clue: "Robots control the doors, and the street markets only accept strange digital currency.",
    tip: "Temporal tip: Old-fashioned repairs may impress a robot.",
    eventTitle: "A market robot has stopped working",
    eventDescription: "The city gates are locked. A small robot sparks beside the only way out.",
    choices: [
      {
        id: "fix",
        label: "Try to repair the robot",
        required: ["Solar Charger", "Duct Tape"],
        success: {
          title: "Neon City Repair Hero",
          story: "You recharge the robot and repair it with duct tape. It calls this 'ancient human engineering' and gives you five stars.",
          stability: "89%",
          badge: "Robot Mechanic"
        },
        failure: {
          title: "Robot Error 404",
          story: "You lack the right repair tools. The robot restarts and announces that you are now its unpaid technical support assistant.",
          stability: "50%",
          badge: "Future Help Desk"
        }
      },
      {
        id: "perform",
        label: "Distract the crowd",
        required: ["Tiny Speaker"],
        success: {
          title: "Underground DJ",
          story: "Your speaker starts a robot dance party. The city gates open out of pure embarrassment.",
          stability: "80%",
          badge: "Synthwave Legend"
        },
        failure: {
          title: "Silent Disco Disaster",
          story: "Without a speaker, you perform an energetic silent dance. The crowd is distracted because nobody understands what is happening.",
          stability: "55%",
          badge: "Confusing Performer"
        }
      },
      {
        id: "explore",
        label: "Search for another exit",
        required: ["Flashlight"],
        success: {
          title: "Tunnel Pathfinder",
          story: "Your flashlight reveals a hidden tunnel. It leads to a future laundry room, but one machine gives you a free neon sticker.",
          stability: "76%",
          badge: "City Pathfinder"
        },
        failure: {
          title: "Laundry Portal",
          story: "Without a flashlight, you enter a dark tunnel and become part of a robot's sock-sorting experiment.",
          stability: "47%",
          badge: "Lost Sock Assistant"
        }
      }
    ]
  },
  {
    id: "moon",
    name: "Moon Colony — 2247",
    clue: "Low gravity, limited oxygen, and a gardening robot has gone on strike.",
    tip: "Temporal tip: Plants need power, and floating ducks are rarely accidental.",
    eventTitle: "The moon colony has an emergency",
    eventDescription: "The greenhouse is dark, while an oxygen pipe makes an alarming hissing sound.",
    choices: [
      {
        id: "garden",
        label: "Help the greenhouse",
        required: ["Plant Seeds", "Solar Charger"],
        success: {
          title: "Moon Garden Founder",
          story: "You restore power and plant new seeds. The robot names a basil leaf after you, which is sweet but impossible to frame.",
          stability: "96%",
          badge: "Lunar Botanist"
        },
        failure: {
          title: "Accidental Moon Mud",
          story: "Without seeds or solar power, you water an empty pot for twenty minutes while the gardening robot quietly judges you.",
          stability: "52%",
          badge: "Space Gardener Trainee"
        }
      },
      {
        id: "repair",
        label: "Fix the oxygen pipe",
        required: ["Duct Tape", "Rope"],
        success: {
          title: "Moon Colony Fixer",
          story: "You repair the pipe with duct tape and rope. The official manual gains a chapter called: 'Honestly, This Works.'",
          stability: "84%",
          badge: "Emergency Engineer"
        },
        failure: {
          title: "Oxygen Pipe Panic",
          story: "You try to hold the pipe together with your hands. This works for six seconds and impresses absolutely nobody.",
          stability: "44%",
          badge: "Very Temporary Engineer"
        }
      },
      {
        id: "float",
        label: "Follow a floating object",
        required: ["Rubber Duck"],
        success: {
          title: "Zero-Gravity Duck Detective",
          story: "Your Rubber Duck helps you identify another duck-shaped object: a lost supply pod. The colony makes your duck mayor for seven minutes.",
          stability: "81%",
          badge: "Space Detective"
        },
        failure: {
          title: "Ceiling Resident",
          story: "Without a Rubber Duck for comparison, you follow a floating mop into a ceiling vent and need robot rescue.",
          stability: "53%",
          badge: "Low-Gravity Tourist"
        }
      }
    ]
  }
];

const items = [
  { name: "Flashlight", icon: "🔦", description: "For caves, tunnels, and suspicious laundry rooms." },
  { name: "Duct Tape", icon: "🩹", description: "A solution to problems and sometimes new problems." },
  { name: "Solar Charger", icon: "☀️", description: "Useful when the future forgets plug sockets." },
  { name: "Blank Notebook", icon: "📓", description: "For secrets and goose-related evidence." },
  { name: "Mirror", icon: "🪞", description: "Useful for self-reflection. Also dinosaur reflection." },
  { name: "Plant Seeds", icon: "🌱", description: "Small, hopeful, and useful on the moon." },
  { name: "Rubber Duck", icon: "🦆", description: "Not essential, unless a duck becomes mayor." },
  { name: "Fake Moustache", icon: "🥸", description: "Instant authority, unless someone pulls on it." },
  { name: "Snack Box", icon: "🍪", description: "Useful for diplomacy and hungry reptiles." },
  { name: "Mystery Key", icon: "🗝️", description: "It probably opens something. Probably." },
  { name: "Tiny Speaker", icon: "🔊", description: "For robot dance parties." },
  { name: "Rope", icon: "🪢", description: "For climbing, fixing, and looking prepared." }
];

const eraName = document.querySelector("#era-name");
const eraClue = document.querySelector("#era-clue");
const itemsGrid = document.querySelector("#items-grid");
const suitcaseItems = document.querySelector("#suitcase-items");
const selectionCount = document.querySelector("#selection-count");
const gameMessage = document.querySelector("#game-message");
const travelButton = document.querySelector("#travel-button");
const rerollButton = document.querySelector("#reroll-button");
const tipButton = document.querySelector("#tip-button");
const soundButton = document.querySelector("#sound-button");
const tipMessage = document.querySelector("#tip-message");

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
let currentDestination = null;
let journeyComplete = false;
let tipUsed = false;
let soundOn = true;
let audioContext;

function hasAllItems(requiredItems) {
  return requiredItems.every((item) => selectedItems.includes(item));
}

function chooseDestination() {
  currentDestination = destinations[
    Math.floor(Math.random() * destinations.length)
  ];

  selectedItems = [];
  journeyComplete = false;
  tipUsed = false;

  eraName.textContent = currentDestination.name;
  eraClue.textContent = currentDestination.clue;
  gameMessage.textContent = "New destination selected. Pack exactly three items.";

  tipButton.disabled = false;
  tipButton.textContent = "Request temporal tip (1 left)";
  tipMessage.textContent = "";

  rerollButton.disabled = false;
  arrivalCard.hidden = true;
  resultCard.hidden = true;

  renderGame();
}

function renderGame() {
  selectionCount.textContent = `${selectedItems.length} / 3 selected`;

  itemsGrid.innerHTML = items.map((item) => {
    const selected = selectedItems.includes(item.name);

    return `
      <button class="item-button ${selected ? "selected" : ""}"
        type="button"
        data-item="${item.name}"
        aria-pressed="${selected}"
        ${journeyComplete ? "disabled" : ""}>
        <span class="item-icon">${item.icon}</span>
        <span class="item-name">${item.name}</span>
        <span class="item-description">${item.description}</span>
      </button>
    `;
  }).join("");

  suitcaseItems.innerHTML = selectedItems.length === 0
    ? "<p class=\"empty-suitcase\">Your suitcase is empty.</p>"
    : selectedItems.map((item) => `<p class="suitcase-tag">${item}</p>`).join("");

  travelButton.disabled = selectedItems.length !== 3 || journeyComplete;
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

function showTemporalTip() {
  if (tipUsed) {
    return;
  }

  tipUsed = true;
  tipMessage.textContent = currentDestination.tip;
  tipButton.disabled = true;
  tipButton.textContent = "Temporal tip used";
}

function toggleSound() {
  soundOn = !soundOn;
  soundButton.textContent = soundOn ? "Sound: On" : "Sound: Off";
  soundButton.setAttribute("aria-pressed", String(soundOn));
}

function playSound(type) {
  if (!soundOn) {
    return;
  }

  const AudioClass = window.AudioContext || window.webkitAudioContext;
  audioContext = audioContext || new AudioClass();

  const notes = type === "success" ? [523, 659, 784] : [180, 140];

  notes.forEach((note, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const time = audioContext.currentTime + index * 0.12;

    oscillator.type = type === "success" ? "sine" : "sawtooth";
    oscillator.frequency.setValueAtTime(note, time);

    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(time);
    oscillator.stop(time + 0.22);
  });
}

function beginTravel() {
  journeyComplete = true;
  rerollButton.disabled = true;
  tipButton.disabled = true;

  eventTitle.textContent = currentDestination.eventTitle;
  eventDescription.textContent = currentDestination.eventDescription;

  choicesGrid.innerHTML = currentDestination.choices.map((choice) => {
    return `
      <button class="choice-button" type="button" data-choice="${choice.id}">
        ${choice.label}
      </button>
    `;
  }).join("");

  gameMessage.textContent = "You have arrived. Choose carefully.";
  arrivalCard.hidden = false;

  renderGame();

  arrivalCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function finishJourney(choiceId) {
  const choice = currentDestination.choices.find((item) => item.id === choiceId);
  const success = hasAllItems(choice.required);
  const result = success ? choice.success : choice.failure;
  const requiredText = choice.required.join(" and ");
  const stability = Number(result.stability.replace("%", ""));
  const goodOutcome = stability >= 75;

  resultTitle.textContent = result.title;
  resultStory.innerHTML = `
    <strong>Why this happened:</strong>
    You chose “${choice.label}”.
    ${success
      ? `You packed ${requiredText}, so this plan worked.`
      : `This plan needed ${requiredText}, but you did not pack everything required.`}
    <br><br>
    ${result.story}
  `;

  stabilityScore.textContent = result.stability;
  badgeName.textContent = result.badge;

  resultCard.classList.remove("good-outcome", "bad-outcome");
  outcomeEffect.innerHTML = "";

  if (goodOutcome) {
    resultCard.classList.add("good-outcome");
    playSound("success");

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
    playSound("failure");

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

  gameMessage.textContent = goodOutcome
    ? "Excellent time travel. History is mostly safe."
    : "A chaotic journey, but at least you returned.";

  resultCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

itemsGrid.addEventListener("click", (event) => {
  const itemButton = event.target.closest(".item-button");

  if (itemButton) {
    toggleItem(itemButton.dataset.item);
  }
});

choicesGrid.addEventListener("click", (event) => {
  const choiceButton = event.target.closest(".choice-button");

  if (choiceButton) {
    finishJourney(choiceButton.dataset.choice);
  }
});

rerollButton.addEventListener("click", chooseDestination);
tipButton.addEventListener("click", showTemporalTip);
soundButton.addEventListener("click", toggleSound);
travelButton.addEventListener("click", beginTravel);

playAgainButton.addEventListener("click", () => {
  chooseDestination();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

chooseDestination();