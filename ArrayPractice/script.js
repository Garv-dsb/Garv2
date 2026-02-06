// 1. ##  Level 1 — Warm-up (Map & Filter Core)

// ### 1. **Potion Strength Calculator**
// You’re given an array of potion strengths.

const doublePotionStrengths = (potions) => {
  potions.map((val) => {
    return val * val;
  });
};

const doublePotionStrengthsValue = doublePotionStrengths([3, 7, 2, 9, 5]);
console.log(doublePotionStrengthsValue);

//  Double every potion’s strength.
