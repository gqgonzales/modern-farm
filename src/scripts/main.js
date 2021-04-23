import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlants, usePlants } from "./field.js";

console.log("Welcome to the main module");

const yearlyPlan = createPlan();

console.log(yearlyPlan);

export const asparagusSeed = createAsparagus();
console.log(asparagusSeed);


