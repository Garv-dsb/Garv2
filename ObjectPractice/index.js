// Problem 1: Potion Mixer
// Question - You are given an object representing magical ingredients and their quantities.
// You are also given a potion recipe that specifies how much of each ingredient is required.
// Determine whether the potion can be brewed.

ingredients = {
  eyeOfNewt: 3,
  dragonScale: 1,
  fairyDust: 10,
};

recipe = {
  eyeOfNewt: 2,
  fairyDust: 5,
};

// Solving

function potionBrewed(ingredients, recipe) {
  for (let recipeIngredients in recipe) {
    // loop through the recipe
    if (!ingredients[recipeIngredients]) {
      return false;
    }

    if (ingredients[recipeIngredients] < recipe[recipeIngredients]) {
      return false;
    }
  }
  return true;
}

console.log(
  "Answer 1 - can we make the potion :",
  potionBrewed(ingredients, recipe),
);

// Output - true

// Rules - Every ingredient in the recipe must exist in ingredientsQuantities must be sufficientExtra ingredients are allowed
// Hint - Loop through the recipe, not the ingredients

// --------------------------------------------------------------------------------

// Problem 2: Alien Translator
// Question- You are given an object that maps alien words to English words. Translate a sentence from alien language to English.

// Input
dictionary = {
  blip: "hello",
  zorp: "friend",
  klax: "!",
};

// Solving

function alienTranslater(alienLanguage) {
  // we can't directly split the data in the object . so accessing the directly the values we are using
  // Object.values()

  const alienWords = Object.values(alienLanguage); // split the words into array
  let translateWord = alienWords.join(" "); // join into the strng

  return translateWord; // return the translated data to english
}

console.log(
  "Answer 2 - The translateof the Alien is :",
  alienTranslater(dictionary),
);

// sentence = "blip zorp klax"
// Output - hello friend !
// Rules - Words are space-separatedEvery word will exist in the dictionary
// Hint - Split → join

// --------------------------------------------------------------------------------

// Problem 3: Dungeon Loot Counter
// Question You are given an object where keys are item names and values are how many were collected in a dungeon.
// Return the name of the item collected the most.

// Input

loot = {
  gold: 120,
  arrows: 45,
  gems: 9,
  potions: 12,
};

function dungeonLootCounter(lootData) {
  let maxLootData = 0;
  let maxLootDataName = " ";

  for (let loot in lootData) {
    if (lootData[loot] > maxLootData) {
      maxLootData = lootData[loot];
      maxLootDataName = loot;
    }
  }

  return maxLootDataName;
}

console.log(
  "Answer 3 - The value of the Max Dungeon Loot is :",
  dungeonLootCounter(loot),
);

// Output - "gold"
// Rules - There will always be at least one itemNo ties
// Hint - Track the current maximum while looping

// --------------------------------------------------------------------------------

// Problem 4: Username Cleanup Bot
// Question - You are given an object of usernames where the value indicates whether the user is active.
// Remove all inactive users and return the cleaned object.

// Input
users = {
  alice: true,
  bob: false,
  charlie: true,
  diana: false,
};

// SOlving

function cleanUpBot(usersData) {
  let activeUser = {};

  for (let user in usersData) {
    if (usersData[user] === true) {
      activeUser[user] = true;
    }
  }

  return activeUser;
}

console.log(
  "Answer 4 - The new Object with the active users :",
  cleanUpBot(users),
);

// Output

// {
//   alice: true,
//   charlie: true
// }

// Rules - Do NOT mutate the original objectReturn a new object
// Hint - Start with an empty object and add selectively

// --------------------------------------------------------------------------------

// Problem 5: Movie Night Votes
// Question - You are given an array of movie titles representing votes.
// Return an object showing how many votes each movie received.

// Input
votes = ["Dune", "Matrix", "Dune", "Alien", "Matrix", "Dune"];

function votesCounter(votesData) {
  votes.map((votesData) => {
    console.log(votes.indexOf(votesData));
  });
}

// console.log(votesCounter(votes));

// Output
// {
//   Dune: 3,
//   Matrix: 2,
//   Alien: 1
// }

// Rules - Movie titles are case-sensitive
// Hint- Check if the key exists before incrementing

// --------------------------------------------------------------------------------

// Problem 6: Smart Home Report
// Question - You are given an object representing smart home devices and their power usage (in watts).
// Return the total power usage of all devices that are currently ON.

// Input;
devices = {
  tv: { on: true, watts: 150 },
  lamp: { on: false, watts: 40 },
  fridge: { on: true, watts: 300 },
};

// Solving

function calculatePower(devices) {
  let powerData = [];

  for (let [key, value] of Object.entries(devices)) {
    powerData.push(value);
  }

  const totalPower = powerData.reduce((total, current) => {
    if (current.on === true) {
      if (current.watts) {
        return total + current.watts;
      }
    }
    return total;
  }, 0);

  return totalPower;
}

console.log(
  "Answer 6 - The total Power usage is the :",
  calculatePower(devices),
);

// Output :
// 450;

// Rules- Only count devices where on === true
// Hint - Nested object access + accumulation

// --------------------------------------------------------------------------------

// Problem 7: Library Late Fees
// Question
// You are given an object of borrowed books and the number of days they are overdue.
// Each day overdue costs $0.25.
// Return the total late fee.

// Input;
borrowed = {
  1984: 4,
  "Brave New World": 2,
  Dune: 0,
};

// Solving

function checkTheOverDuePrice(borrowedData) {
  let totalOverdue = 0;

  for (let dataValue of Object.values(borrowedData)) {
    if (dataValue > 0) {
      totalOverdue += dataValue * 0.25;
    }
  }

  return totalOverdue;
}

console.log(
  "Answer 7 - The total Overdue price is :",
  checkTheOverDuePrice(borrowed),
);

// Output
// 1.5

// Rules - Books with 0 overdue days cost nothing
// Hint - Multiply values, then sum

// --------------------------------------------------------------------------------

// Problem 8: Character Power Rating
// Question - You are given an object representing a game character’s stats.

// Calculate the power rating using this formula:
// power = (strength * 2) + agility + (intelligence * 1.5)

// Input

stats = {
  strength: 10,
  agility: 7,
  intelligence: 6,
};

function calculateChacracterPower(stats) {
  return stats.strength * 2 + stats.agility + stats.intelligence * 1.5;
}

console.log(
  "Answer 8 : The total power of the Character is :",
  calculateChacracterPower(stats),
);

// Output
// 38
// Hint - Read values directly from the object

// --------------------------------------------------------------------------------

// Problem 9: Secret Message Extractor
// Question - You are given an object where each key is a word and the value is a boolean.
// Return a sentence made only of the words whose value is true, in key order.

// Input

message = {
  this: true,
  is: true,
  a: false,
  secret: true,
  message: true,
};

// Solving

function findMessage(message) {
  const messageData = Object.entries(message);
  let secretMessage = [];

  messageData.forEach((msg) => {
    if (msg[1] === true) {
      secretMessage.push(msg[0]);
    }
  });

  return secretMessage.join(" ");
}

console.log(
  "Answer 9 - The answer of the secret message is :",
  findMessage(message),
);

// Output - "this is secret message"
// Rules - Preserve key order
// Hint - Object.entries() preserves insertion order

// --------------------------------------------------------------------------------

// Problem 10: Store Inventory Value
// Question - You are given an object where each key is an item name and the value is an object with price and quantity.
// Return the total value of all inventory.

// Input
inventory = {
  apple: { price: 1, quantity: 30 },
  banana: { price: 0.5, quantity: 50 },
  orange: { price: 0.8, quantity: 20 },
};

function TotalInventryValue(inventory) {
  const InventryData = Object.values(inventory);

  const totalPrice = InventryData.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  return totalPrice;
}

console.log(TotalInventryValue(inventory));

// Output
// 99
// Hint - Multiply first, sum later