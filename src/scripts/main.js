import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus";

console.log("Welcome to the main module");

const yearlyPlan = createPlan();

yearlyPlan();

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)