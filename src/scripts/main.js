import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";

console.log("Welcome to the main module");

const yearlyPlan = createPlan();

console.log(yearlyPlan);

const asparagusSeed = createAsparagus();
console.log(asparagusSeed);
