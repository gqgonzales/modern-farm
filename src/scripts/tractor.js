import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// import { yearlyPlan } from "./main.js";

// import { createPlan } from "./plan.js";

// import { createAsparagus } from "./seeds/asparagus";

// plantSeeds, of course, plants the seeds.
export const plantSeeds = (yearlyPlan) => {
  for (const sowing of yearlyPlan) {
    for (let i = 0; i < sowing.length; i++) {
      if (sowing[i] === "asparagus") {
        addPlant(createAsparagus());
      }
      if (sowing[i] === "potato") {
        addPlant(createPotato());
      }
      if (sowing[i] === "corn") {
        addPlant(createCorn());
      }
      if (sowing[i] === "soybean") {
        addPlant(createSoybean());
      }
      if (sowing[i] === "sunflower") {
        addPlant(createSunflower());
      }
      if (sowing[i] === "wheat") {
        addPlant(createWheat());
      }
    }
  }
};
