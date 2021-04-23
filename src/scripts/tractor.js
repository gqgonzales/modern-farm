import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";

// import { yearlyPlan } from "./main.js";

// import { createPlan } from "./plan.js";

// import { createAsparagus } from "./seeds/asparagus";

// plantSeeds, of course, plants the seeds.
export const plantSeeds = (yearlyPlan) => {
  for (const sowing of yearlyPlan) {
    for (let i = 0; i < sowing.length; i++) {
      if (sowing[i] === "asparagus") {
        addPlant(createAsparagus());
      } else if (sowing[i] === "potato") {
        addPlant(createPotato());
      } else if (sowing[i] === "corn") {
        addPlant(createCorn());
      } else if (sowing[i] === "soybean") {
        addPlant(createSoybean());
      } else if (sowing[i] === "sunflower") {
        addPlant(createSunflower());
      } else if (sowing[i] === "wheat") {
        addPlant(createWheat());
      }
    }
  }

  return usePlants();
};
