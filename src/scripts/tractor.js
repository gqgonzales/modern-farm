import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";

// plantSeeds, of course, plants the seeds.
export const plantSeeds = (yearlyPlan) => {
  for (const sowing of yearlyPlan) {
    for (let i = 0; i < sowing.length; i++) {
      if (sowing[i] === "Asparagus") {
        addPlant(createAsparagus());
      } else if (sowing[i] === "Potato") {
        addPlant(createPotato());
      } else if (sowing[i] === "Corn") {
        addPlant(createCorn());
      } else if (sowing[i] === "Soybean") {
        addPlant(createSoybean());
      } else if (sowing[i] === "Sunflower") {
        addPlant(createSunflower());
      } else if (sowing[i] === "Wheat") {
        addPlant(createWheat());
      }
    }
  }

  return usePlants();
};
