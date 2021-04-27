import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { addPlant, usePlants } from "./field.js";

console.log("Welcome to the main module");

// Chapter 1: Harvest Plan
const yearlyPlan = createPlan();
// console.log(yearlyPlan);

// Chapter 2: Creating Seeds
// console.log(asparagusSeed);
// export const asparagusSeed = createAsparagus();

// Chapter 3: Tilling the Field
// addPlant();
// const currentTilling = usePlants();
// console.log(currentTilling);

// Chapter 4: Sowing the Field
// plantSeeds(yearlyPlan);
// usePlants();
const planting = plantSeeds(yearlyPlan);

console.log(planting);
