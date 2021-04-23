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

// Chapter 1: Harvest Plan
export const yearlyPlan = createPlan();
// console.log(yearlyPlan);

// Chapter 2: Creating Seeds
// console.log(asparagusSeed);
// export const asparagusSeed = createAsparagus();

// Chapter 3: Tilling the Field
addPlant();
const currentTilling = usePlants();
// console.log(currentTilling);

// Chapter 4: Sowing the Field
plantSeeds(usePlants());
console.log(currentTilling);
