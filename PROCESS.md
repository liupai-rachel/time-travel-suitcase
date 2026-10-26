# Process

## Starting idea

I wanted to make a small game where a player has to make a meaningful choice with limited information. My starting idea was a time-travel packing game: the player is sent to a random historical or fictional time period and can only take three items.

The intended experience was to make players ask, “What would actually help me here?” while keeping the tone playful and slightly absurd.

## First version

The first version of the game focused on the packing interaction:

1. A random destination appears.
2. The player chooses exactly three items.
3. The suitcase preview updates immediately.
4. The player can remove an item or draw a new destination.
5. The game prevents the player from choosing more than three items.

I used four destinations:

- Prehistoric Jungle
- The Royal Court
- Neon City
- Moon Colony

The initial implementation already handled ordinary mistakes. For example, the travel button stays disabled until exactly three items are selected, and the game explains that the suitcase is full when the player tries to choose a fourth item.

## Design and code changes

I expanded the game so that packing items was not the only interaction. After travelling, the player now has to make one more decision based on the situation they arrive in.

For example, in the Prehistoric Jungle, the player can:

- Hide in a cave
- Create a distraction
- Offer the velociraptor a snack

The final result is based on both the player's chosen action and the items in their suitcase. This created a clearer interaction loop:

> pack items → travel → make a decision → see the consequence → play again

I also added a travel report with:

- A title for the outcome
- An explanation of why the outcome happened
- A humorous story
- A time stability score
- A badge
- A positive or negative visual effect

High-stability outcomes show confetti, while lower-stability outcomes show warning symbols and a shaking result card.

## User trial

I asked one person to try the game without explaining the rules first.

They understood how to select items, fill the suitcase, and begin time travel. However, they said that some of the early outcomes were difficult to understand. They could not always tell how their packed items and final choice had led to the ending. Some outcomes felt random or too absurd.

## Response to feedback

I changed the game after the user trial.

Originally, each destination had a few successful outcomes and one general failure outcome. This meant that different player choices could sometimes lead to the same confusing result.

I changed this into action-specific outcomes. Each action now has a successful version and a failed version. The travel report also begins with a **“Why this happened”** explanation. It tells the player:

1. Which action they chose
2. Which useful item or items they did or did not pack
3. How that caused the final outcome

For example, choosing “Create a distraction” in the jungle works well when the player packed a Mirror, because the velociraptor is distracted by its reflection. Without a Mirror, the player instead attempts an awkward dance, leading to a different outcome.

This revision made the relationship between input, response, and feedback much clearer.

## AI tools used

I used ChatGPT Codex as a learning and development assistant.

It helped me:

- Brainstorm the game concept
- Break the project into small HTML, CSS, and JavaScript steps
- Explain how to use GitHub Desktop and VS Code
- Suggest item combinations and branching outcomes
- Help write and revise JavaScript logic
- Suggest usability improvements after the user test

One AI suggestion I kept was using a strict three-item suitcase limit. This made the player’s choices more meaningful and created clear feedback when they tried to select too many items.

One suggestion I changed was using illustrated images for every ending. I decided not to use images because creating and managing many separate image files would make the project larger and distract from the interaction. Instead, I used animated confetti and warning effects to show whether an outcome was successful or chaotic.

## Credits

- Game concept, writing, visual design, and testing: Rachel Liu
- Programming support and learning assistance: ChatGPT Codex
- Item icons: standard Unicode emoji
- No external code libraries, APIs, images, or data were used.