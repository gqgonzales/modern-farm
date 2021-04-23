// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field.
// Do not export the array.
import { createAsparagus } from "./seeds/asparagus.js";
// import { cornSeed } from "./seeds/corn.js";
// import { potatoSeed } from "./seeds/potato.js";
// import { soybeanSeed } from "./seeds/soybean.js";
// import { sunflowerSeed } from "./seeds/sunflower.js";
// import { wheatSeed } from "./seeds/wheat.js";

const asparagusSeed = createAsparagus();

const thisHarvest = [];

export const addPlant = () => {
  thisHarvest.push(asparagusSeed);
};

export const usePlants = () => {
  return thisHarvest;
};


console.log(usePlants());
