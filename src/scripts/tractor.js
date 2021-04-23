// import { yearlyPlan } from "./main.js";
// import { createPlan } from "./plan.js";

// import { createAsparagus } from "./seeds/asparagus";

export const plantSeeds = (yearlyPlan) => {
  for (const crop of yearlyPlan) {
    if (crop.type === "asparagus") {
      createAsparagus();
    }
  }

  return yearlyPlan;
};
