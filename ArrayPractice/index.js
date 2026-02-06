// 1. ##  Level 1 — Warm-up (Map & Filter Core)

// ### 1. **Potion Strength Calculator**
// You’re given an array of potion strengths.

const doublepotionstrengths = (potions) => potions.map((val) => val * val);
console.log(doublepotionstrengths([3, 7, 2, 9, 5]));

//  Double every potion’s strength.

// ### 2. **Bouncer at the Magic Club**

// Only wizards level **10+** can enter.

const wizardLevels = [5, 12, 8, 20, 10];

const allowedWizards = (levels) => levels.filter((val) => val > 10);
console.log(allowedWizards(wizardLevels));
//  Return only allowed wizards.

// **Function:** `allowedWizards(levels)`

// **Hint:** This is literally what `filter` lives for.

// ### 3. **NPC Name Formatter**

const names = ["goblin", "orc", "elf"];

const formatNPCNames = (names) =>
  names.map((val) => val[0].toUpperCase() + val.slice(1));
console.log(formatNPCNames(names));

//  Capitalize the first letter of each name.

// **Function:** `formatNPCNames(names)`

// **Hint:** Strings are just sneaky arrays.

// ##  Level 2 — Reduce Gets Involved

// ### 4. **Dragon Gold Counter**

const goldPiles = [100, 250, 50, 400]; // 800

const countTotalGold = (piles) =>
  piles.reduce((currentGold, TotalGold) => (TotalGold += currentGold));

console.log(countTotalGold(goldPiles));

//  Calculate total gold stolen.

// **Function:** `countTotalGold(piles)`

// **Hint:** Reduce is just a fancy accumulator loop.

// ### 5. **Leaderboard Champion**

const scores = [44, 92, 67, 99, 85];

const getHighestScore = (scores) => {
  let MaxScore = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (MaxScore < scores[i]) {
      MaxScore = scores[i];
    }
  }
  return MaxScore;
};

console.log(getHighestScore(scores));

//  Find the highest score.

// **Function:** `getHighestScore(scores)`

// **Hint:** Your reducer compares two values each time.

// ### 6. **Sentence Alchemist**

const words = ["JavaScript", "is", "weird", "but", "fun"];

const buildSentence = (words) => {
  return words.join(" ");
};

console.log(buildSentence(words));

//  Turn this into a proper sentence.

// **Function:** `buildSentence(words)`

// **Hint:** Reduce + spaces + punctuation at the end.

// ##  Level 3 — Loops Like a Pro (`for...of`, `for...in`)

// ### 7. **Inventory Weight Checker**

const inventory = [5, 12, 6, 3, 20];

const isOverEncumbered = (weights) => {
  let totalweight = 0;

  for (let weight of weights) {
    totalweight += weight;
    if ((totalweight = 20)) {
      break;
    }
  }
//   return totalweight;
};

console.log(isOverEncumbered(inventory));

//  Stop looping once total weight exceeds 20.

// **Function:** `isOverEncumbered(weights)`

// **Hint:** `for...of` lets you `break`.

// ### 8. **Character Stat Reader**

const character = {
  name: "Aria",
  class: "Rogue",
  level: 7,
  hp: 34,
};

const logCharacterStats = (character) => {
  for (const [key, value] of Object.entries(character)) {
    console.log(`${key}: ${value}`);
  }
};

logCharacterStats(character);

//  Log each stat as `"key: value"`.

// **Function:** `logCharacterStats(character)`

// **Hint:** Objects ≠ arrays. Use the loop meant for keys.

// ### 9. **Skill Point Counter**

const skills = {
  stealth: 3,
  archery: 5,
  magic: 0,
  alchemy: 2,
};

const countLearnedSkills = (skills) => {
  let skillCount = 0;

  for (let data of Object.values(skills)) {
    if (data > 0) {
      skillCount += data;
    }
  }
  return skillCount;
};

console.log(countLearnedSkills(skills));

//  Count how many skills are **above 0**.

// **Function:** `countLearnedSkills(skills)`

// **Hint:** Loop through keys, check values.

// ##  Level 4 — Spicy Combos (Map + Filter + Reduce)

// ### 10. **Quest XP Machine**

const quests = [
  { name: "Rats", xp: 50 },
  { name: "Dragon", xp: 500 },
  { name: "Escort", xp: 120 },
];

const calculateTotalXP = (quests) => {
  quests.reduce((acc, cur) => {
    if (cur.xp > 100) {
      return acc + cur.xp;
    }
    return acc;
  }, 0);
};

console.log("Total XP from quests worth **100+ XP**", calculateTotalXP(quests));

//  Total XP from quests worth **100+ XP**.

// **Function:** `calculateTotalXP(quests)`

// **Hint:** Filter → Map → Reduce (in that order).

// ### 11. **Tweet Cleaner**

const tweets = ["I love JS", "BUY NOW!!!", "Map and reduce are ", "FREE MONEY"];

const cleanTweets = (tweets) => {
  const newTweets = tweets.filter((data) => {
    return data != data.toUpperCase();
  });
  return newTweets;
};

console.log(cleanTweets(tweets));

//  Remove tweets that look like spam (ALL CAPS).

// **Function:** `cleanTweets(tweets)`

// **Hint:** Strings can shout. Detect that.

// ### 12. **Restaurant Bill Splitter**

const orders = [
  { item: "Burger", price: 12 },
  { item: "Fries", price: 5 },
  { item: "Shake", price: 6 },
];

const calculateFinalBill = (orders) => {
  let totalBill = 0;

  orders.forEach((data) => {
    totalBill += data.price; // total of bill
  });

  totalBill += totalBill * 0.1; // calculate 10% of bill

  return totalBill;
};

console.log(
  "The price of Total bill with 10% is :",
  calculateFinalBill(orders),
);

//  Calculate total bill with 10% tax.

// **Function:** `calculateFinalBill(orders)`

// ##  Boss Level (Optional but Juicy)

// ### 13. **Data Wizardry**

// You receive **unknown data**:

const data = [3, "hi", {}, 7, null, 10, "JS", 20];

const sumOnlyNumbers = (data) => {
  let sum = 0;

  data.map((val) => {
    if (typeof val === "number") {
      sum += val;
    }
  });

  return sum;
};

console.log("The sum of Only Numbers is : ", sumOnlyNumbers(data));

//  Sum **only the numbers**.

// **Function:** `sumOnlyNumbers(data)`

// **Hint:** Filter by type before reducing.

// ### 14. **Achievement Unlocker**

const achievements = {
  explorer: true,
  slayer: false,
  collector: true,
  speedrunner: true,
};

const getUnlockedAchievements = (achievements) => {
  let unlockAchievements = [];

  for (let data in achievements) {
    if (achievements[data] === true) {
      unlockAchievements.push(data);
    }
  }

  return unlockAchievements;
};

console.log(getUnlockedAchievements(achievements));

//  Return an array of unlocked achievements.

// **Function:** `getUnlockedAchievements(achievements)`

// **Hint:** Object → loop → condition → array.
