type DessertBase = {
  name: string;
  hasFruit: boolean;
  temperature: "hot" | "cold" | "room temp";
};

export type FruitDessert = DessertBase & {
  hasFruit: true;
  fruit: Fruit;
  fruitSize: "puree" | "bits" | "chunks" | "whole";
  locationOfFruit: "top" | "bottom" | "inside" | "mixed";
  servedWith: Topping[];
};

export const toppings = ["whipped cream", "added-in fruit", "glaze"] as const;
export type Topping = (typeof toppings)[number];

export type NonFruitDessert = DessertBase & {
  hasFruit: false;
};

export type Dessert = FruitDessert | NonFruitDessert;

export const fruits = [
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
  "apple",
  "peaches",
  "pear",
  "nectarine",
  "pineapple",
  "mango",
  "banana",
  "coconut",
  "lemon",
  "lime",
  "orange",
  "kiwi",
  "various",
] as const;

export const acceptableToppingsWithFruit: Record<Topping, Fruit[]> = {
  "whipped cream": ["strawberry", "blueberry", "raspberry", "blackberry"],
  "added-in fruit": ["strawberry"],
  glaze: [],
};

export type Fruit = (typeof fruits)[number];

export const dislikedFruits: Fruit[] = ["banana"];

export const fruitsThatMustBeServedAlone: Fruit[] = [
  "cherry",
  "peaches",
  "pear",
  "nectarine",
  "pineapple",
  "mango",
  "kiwi",
  "various",
];

export const fruitsThatCanBeServedWithSomething: Fruit[] = [
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "coconut",
  "lemon",
  "lime",
  "orange",
  "apple",
];

export const fruitsThatCanBeServedWarm: Fruit[] = [
  "lemon",
  "lime",
  "orange",
  "coconut",
];
