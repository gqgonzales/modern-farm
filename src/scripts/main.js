import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { addPlant, usePlants } from "./field.js";
// import { harvestPlants } from "./harvester.js"
// import { asparagusSeed } from "./seeds/asparagus.js";

console.log("Welcome to the main module");

// Chapter 1: Harvest Plan
const yearlyPlan = createPlan();
// console.log(yearlyPlan);

// Chapter 2: Creating Seeds
// console.log(asparagusSeed);
// export const asparagusSeed = createAsparagus();

// Chapter 3: Tilling the Field
// addPlant();
const currentTilling = usePlants();
// console.log(currentTilling);

// Chapter 4: Sowing the Field
// plantSeeds(yearlyPlan);
// usePlants();
export const planting = plantSeeds(yearlyPlan);
console.log(planting);

// Chpater 5: Harvesting the Crops
// const collectHarvest = harvestPlants(planting);