import { createPlan } from "./plan.js";

import { createAsparagus } from "./seeds/asparagus.js";
import { asparagusSeed } from "./seeds/asparagus.js";

import { createCorn } from "./seeds/corn.js";
import { cornSeed } from "./seeds/corn.js";

import { createPotato } from "./seeds/potato.js";
import { potatoSeed } from "./seeds/potato.js";

import { createSoybean } from "./seeds/soybean.js";
import { soybeanSeed } from "./seeds/soybean.js";

import { createSunflower } from "./seeds/sunflower.js";
import { sunflowerSeed } from "./seeds/sunflower.js";

import { createWheat } from "./seeds/wheat.js";
import { wheatSeed } from "./seeds/wheat.js";

import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

console.log("Welcome to the main module");

export const yearlyPlan = createPlan();

// console.log(yearlyPlan);

// console.log(asparagusSeed);
// export const asparagusSeed = createAsparagus();

// This is the "Checking your logic" at the end of Chapter 3, Tilling
addPlant();
const currentTilling = usePlants();
// console.log(currentTilling);


// console.log(usePlants());

// plantSeeds(yearlyPlan);
// console.log(plantSeeds(yearlyPlan));

// Checking your logic at the end of Chapter 4, Sowing with your tractor
plantSeeds(usePlants());
console.log(currentTilling);
