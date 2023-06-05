import {
  Dessert,
  FruitDessert,
  acceptableToppingsWithFruit,
  dislikedFruits,
  fruitsThatCanBeServedWarm,
  fruitsThatMustBeServedAlone,
} from "./src/models";

export const doesRandiLikeThisDessert = (dessert: Dessert): boolean => {
  // If it is an exception and no other rules really apply
  const exception = isException(dessert);
  if (exception) return exception.value;

  // If it is not a fruit dessert
  if (!dessert.hasFruit) {
    return true;
  }

  // If fruit contains disliked fruits
  if (dislikedFruits.includes(dessert.fruit)) return false;

  // If the fruit is served warm and not palatable warm
  if (
    dessert.temperature === "hot" &&
    !fruitsThatCanBeServedWarm.includes(dessert.fruit)
  )
    return false;

  // If it has toppings that are unacceptable
  if (!isWhatTheFruitIsServedWithAcceptable(dessert)) return false;

  // If it has fruit that is too big
  if (["chunks", "whole"].includes(dessert.fruitSize)) {
    if (
      dessert.fruit !== "various" &&
      ["mixed", "inside"].includes(dessert.locationOfFruit)
    )
      return false;
  }

  return true;
};

const isWhatTheFruitIsServedWithAcceptable = (
  dessert: FruitDessert
): boolean => {
  let hasAcceptableTopping = true;

  if (fruitsThatMustBeServedAlone.includes(dessert.fruit)) {
    // For every topping that it is served with
    for (const topping of dessert.servedWith) {
      const acceptableFruitWithTopping = acceptableToppingsWithFruit[topping];

      // If the topping is not acceptable with the given fruit
      if (!acceptableFruitWithTopping.includes(dessert.fruit)) {
        hasAcceptableTopping = false;

        // Break out of the loop
        break;
      }
    }
  }

  return hasAcceptableTopping;
};

const isException = (dessert: Dessert): { value: boolean } | undefined => {
  // regex for detecting "cheese cake" or "cheesecake" in any casing/spacing
  const cheeseCakeRegex = /cheese\s*cake/i;
  if (cheeseCakeRegex.test(dessert.name)) return { value: false };

  if (!dessert.hasFruit) return undefined;

  if (dessert.fruit === "lemon") return { value: true };

  // regex for detecting "apple turnover" in any casing/spacing
  const appleTurnoverRegex = /apple\s*turnover/i;
  if (appleTurnoverRegex.test(dessert.name)) return { value: true };

  return undefined;
};

// console.log(
//   result ? `Randi likes ${dessert.name}` : `Randi DOES NOT like ${dessert.name}`
// );
