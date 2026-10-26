# Time Travel Baggage Check

Time Travel Baggage Check is a small interactive browser game about packing for an unexpected journey through time.

The player is given a random destination, such as a prehistoric jungle, a royal court, a neon future city, or a moon colony. They can only pack three items, then must make one more decision after arriving. Their packed items and final decision decide what happens next.

![Screenshot of Time Travel Baggage Check](screenshot.png)

## How to play

Choose three items to pack in your suitcase. Once the suitcase is full, select **Begin time travel**.

After arriving, choose what to do in the situation shown on screen. The travel report explains the outcome, shows a time stability score, and unlocks a badge. Good outcomes have confetti, while more chaotic outcomes show warning effects.

The game can be replayed by selecting **Pack for another journey**.

## Main interaction

The game uses a simple input, response, and feedback loop:

- The player selects three items.
- The selected items affect which outcomes are possible.
- The player makes a decision after arriving at a destination.
- The game explains why that choice and those items led to the final result.

For example, in the prehistoric jungle, using a mirror to distract a velociraptor leads to a successful outcome because the dinosaur becomes distracted by its own reflection. Choosing the same action without a mirror leads to a different result.

## Error handling

The game handles several common actions clearly:

- The travel button stays disabled until exactly three items are selected.
- The player is told when the suitcase is full.
- Clicking an already selected item removes it from the suitcase.
- Once a journey starts, the player cannot continue changing their items.
- The player can restart with a new destination after receiving a result.

## How to run

No installation is required.

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Play the game.

The project uses only HTML, CSS, and JavaScript. It does not need any external libraries, APIs, or accounts.

## Known limitations

The game currently has four destinations. Each destination has three possible actions, and each action has a success or failure outcome depending on the items packed. More destinations and item combinations could be added in a future version.

## Credits

Game concept, writing, design, and code by Rachel Liu.

Item icons use standard Unicode emoji characters.

ChatGPT Codex was used as a development and learning assistant for brainstorming, coding support, and testing improvements. No external code libraries, images, data, or APIs were used.