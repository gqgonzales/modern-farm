// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field.
// Do not export the array.
// import { createAsparagus } from "./seeds/asparagus.js";
// import { asparagusSeed } from "./seeds/asparagus.js";

// import { createCorn } from "./seeds/corn.js";
// import { cornSeed } from "./seeds/corn.js";

// import { createPotato } from "./seeds/potato.js";
// import { potatoSeed } from "./seeds/potato.js";

// import { createSoybean } from "./seeds/soybean.js";
// import { soybeanSeed } from "./seeds/soybean.js";

// import { createSunflower } from "./seeds/sunflower.js";
// import { sunflowerSeed } from "./seeds/sunflower.js";

// import { createWheat } from "./seeds/wheat.js";
// import { wheatSeed } from "./seeds/wheat.js";

import { plantSeeds } from "./tractor.js";

// const asparagusSeed = createAsparagus();

const thisHarvest = [];

// addPlant adds the seed to the field.
//You must specify which seed you are planting inside the push() method.
export const addPlant = (seedObject) => {
  thisHarvest.push(seedObject);
};

// Returns a copy of the array of plants.
export const usePlants = () => {
  return thisHarvest;
};
